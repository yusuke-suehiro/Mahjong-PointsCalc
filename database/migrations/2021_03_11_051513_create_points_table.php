<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePointsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pointsChild', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('han');
          $table->integer('fu');
          $table->integer('ron');
          $table->integer('tsumoChild');
          $table->integer('tsumoParent');
        });
        Schema::create('pointsParent', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('han');
          $table->integer('fu');
          $table->integer('ron');
          $table->integer('tsumo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('points');
    }
}
