(function() {
  "use strict";

  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyList.itemName = "";
    toBuyList.itemQuantity = "";

    toBuyList.checkOffItem = function(itemIndex) {
      ShoppingListCheckOffService.checkOffItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtList = this;

    alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

    alreadyBoughtList.itemName = "";
    alreadyBoughtList.itemQuantity = "";
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      { itemName: "All-purpose flour", itemQuantity: "2 1/4 cups" },
      { itemName: "Baking Soda", itemQuantity: "1/2 tsp" },
      { itemName: "Salt", itemQuantity: "1 tsp" },
      { itemName: "Cinnamon", itemQuantity: "1/2 tsp" },
      { itemName: "Unsalted butter", itemQuantity: "1 cup" },
      { itemName: "White sugar", itemQuantity: "1/2 cup" },
      { itemName: "Brown sugar", itemQuantity: "1 cup" },
      { itemName: "Eggs", itemQuantity: "2" },
      { itemName: "Vanilla extract", itemQuantity: "2 tsp" },
      { itemName: "Milk chocolate chips", itemQuantity: "1 cup" },
      { itemName: "Dark chocolate chips", itemQuantity: "1 cup" }
    ];
    var alreadyBoughtItems = [];

    service.checkOffItem = function(itemIndex) {
      alreadyBoughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
    };

    service.getToBuyItems = function() {
      return toBuyItems;
    };

    service.getAlreadyBoughtItems = function() {
      return alreadyBoughtItems;
    };
  }
})();
