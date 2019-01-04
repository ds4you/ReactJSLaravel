<?php

// ItemController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Item;

class ItemController extends Controller {

    public function index() {
        $items = Item::all();
        return response()->json($items);
    }

    public function create() {
        //
    }

    public function store(Request $request) {
        $item = new Item;
        $item->name = $request->get('name');
        $item->price = $request->get('price');
        $item->save();
        return response()->json('Successfully added');
    }

    public function show($id) {
        //
    }

    public function edit($id) {
        $item = Item::find($id);
        return response()->json($item);
    }

    public function update(Request $request, $id) {
        $item = Item::find($id);
        $item->name = $request->get('name');
        $item->price = $request->get('price');
        $item->save();

        return response()->json('Successfully Updated');
    }

    public function destroy($id) {
        $item = Item::find($id);
        $item->delete();

        return response()->json('Successfully Deleted');
    }

}
