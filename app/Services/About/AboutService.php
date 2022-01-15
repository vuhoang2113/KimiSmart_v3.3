<?php

namespace App\Services\About;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Arr;

use App\Http\Requests\API\About\StoreRequest;
use App\Http\Requests\API\About\UpdateRequest;

use App\Services\About\AboutServiceInterface;

use App\Repositories\User\UserEloquentRepository;
use App\Repositories\SocialNetwork\SocialNetworkEloquentRepository;
use App\Repositories\About\AboutEloquentRepository;
use App\Services\About\Modules\About as AboutModule;

class AboutService implements AboutServiceInterface
{
    protected $userRepository;
    protected $socialNetworkRepository;
    protected $aboutRepository;
    protected $aboutModule;

    public function __construct(
        UserEloquentRepository $userRepository,
        SocialNetworkEloquentRepository $socialNetworkRepository,
        AboutEloquentRepository $aboutRepository
    ) {
        $this->userRepository = $userRepository;
        $this->socialNetworkRepository = $socialNetworkRepository;
        $this->aboutRepository = $aboutRepository;
        $this->aboutModule = new AboutModule();
    }

    public function index(Request $request)
    {
        $all = $this->socialNetworkRepository->getAll();
        return $all;
    }

    public function store(StoreRequest $request)
    {
        $result = $this->aboutRepository->create([
            'order_number' => $this->aboutRepository->maxOrderNumber($request->user()->id) + 1,
            'user_id' => $request->user()->id,
            'social_network_id' => $request->input('social_network_id'),
            'show_button_text' => $request->input('show_button_text'),
            'button_text' => $request->input('button_text'),
            'value' => $request->input('value'),
        ]);
        return $result;
    }

    public function update($id, UpdateRequest $request)
    {
        $params = [
            'id' => $id,
            'show_button_text' => Arr::get($request->all(), 'show_button_text'),
            'button_text' => Arr::get($request->all(), 'button_text'),
            'value' => Arr::get($request->all(), 'value'),
        ];
        $result = $this->aboutRepository->updateOwnerAbout($params);
        return $result;
    }

    public function updateList($payload = [])
    {
        $result = $this->aboutRepository->updateList($payload);
        return $result;
    }

    public function destroy($id, Request $request)
    {
        $item = $this->aboutRepository->find($id);
        if ($item) {
            if ($item->user_id === $request->user()->id) {
                $result = $this->aboutRepository->delete($id);
                return $result;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
