@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <users-error />
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-9">
            <users-list />
        </div>
        <div class="col-md-3">
            <div class="row justify-content-center">
                <div class="col-md-12 mb-4">
                    <users-create />
                </div>
                <div class="col-md-12 mb-4">
                    <users-edit />
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
