angular.module("appModule", [])
.controller("defaultCtrl", function ($scope) {

    $scope.currentView = "table";
    $scope.refresh = function () {
        $scope.items = [
          {
            companyName: "Item1",
            companyGoods: ['first1','second1','second1']
          },
          {
            companyName: "Item2",
            companyGoods: ['first2','second2','second2']
          },
          {
            companyName: "Item3",
            companyGoods: ['first3','second3','nd3']
          }
        ];
    }

    // удаление элемента из модели
    $scope.delete = function (item) {
        $scope.items.splice($scope.items.indexOf(item), 1);
    }

    // редеактирование существующего или создание нового элемента
    $scope.editOrCreate = function (item) {
        $scope.currentItem = item ? item : {
          companyGoods: ['']
        };
        $scope.currentView = "edit";
    }

    // сохранение изменений
    $scope.saveEdit = function (item) {
      console.log(item);
      let isNewItem = true;
      for (var i = 0; i < $scope.items.length; i++) {
          if ($scope.items[i].companyName == item.companyName) {
              isNewItem = false;
              $scope.items[i] = item;
              break;
          }
      }
      if (isNewItem) {
        $scope.items.push(item);
      }
      $scope.currentView = "table"
    }

    $scope.addItem = () => {
      $scope.currentItem.companyGoods.push('');
    }

    $scope.deleteItem = (index) => {
      //$scope.items.splice($scope.items.indexOf(item), 1);
      //$scope.currentItem.companyGoods.push('');
      console.log(index);
      console.log($scope.currentItem.companyGoods);
      $scope.currentItem.companyGoods.splice(index,1);
      console.log($scope.currentItem.companyGoods);
    }
    // отмена изменений и возврат в представление table
    $scope.cancelEdit = function () {
        $scope.currentItem = {};
        $scope.currentView = "table";
    }

    $scope.refresh();
});
