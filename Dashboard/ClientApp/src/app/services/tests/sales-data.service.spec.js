"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var sales_data_services_1 = require("../sales-data.services");
describe('SalesDataService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [sales_data_services_1.SalesDataService]
        });
    });
    it('should be created', testing_1.inject([sales_data_services_1.SalesDataService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=sales-data.service.spec.js.map