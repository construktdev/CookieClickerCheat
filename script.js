var CookieClickerInterval;
var buildingPurchaseInterval;
var upgradePurchaseInterval;

function automateCookieClicker() {
    CookieClickerInterval = setInterval(Game.ClickCookie, 1);

    buildingPurchaseInterval = setInterval(function() {
        var buildings = Game.ObjectsById;
        var affordableBuildings = buildings.filter(building => building.price <= Game.cookies);
        if (affordableBuildings.length > 0) {
            var randomIndex = Math.floor(Math.random() * affordableBuildings.length);
            affordableBuildings[randomIndex].buy();
        }
    }, 1);

    upgradePurchaseInterval = setInterval(function() {
        var upgrades = Game.UpgradesInStore.filter(function(upgrade){
            return !upgrade.bought && upgrade.canBuy();
        });
        if (upgrades.length > 0) {
            var randomIndex = Math.floor(Math.random() * upgrades.length);
            upgrades[randomIndex].buy();
        }
    }, 1);
}

function stopAutomation() {
    clearInterval(CookieClickerInterval);
    clearInterval(buildingPurchaseInterval);
    clearInterval(upgradePurchaseInterval);
}

automateCookieClicker();
