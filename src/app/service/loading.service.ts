import { Injectable, TemplateRef, Output, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LoadingService {

    private loadingSelectProduct = true;
    private loadingSearchSales = false;
    private loadingSafe = false;
    public loadingTemplate: TemplateRef<any>;
    private loadingMenuComponents = false;
    private loadingResale = false;
    private loadingAdvancedFilter = false;

    getLoadingSelectProduct() {
        return this.loadingSelectProduct;
    };

    offLoadingSelectProduct() {
        setTimeout(() => {
            this.loadingSelectProduct = false
        }, 800);
    };

    onLoadingSelectProduct() {
        this.loadingSelectProduct = true;
    }

    getLoadingSearchSales() {
        return this.loadingSearchSales;
    };

    offLoadingSearchSales() {
        setTimeout(() => {
            this.loadingSearchSales = false
        }, 800);
    };

    onLoadingSearchSales() {
        this.loadingSearchSales = true;
    }

    getLoadingSafe() {
        return this.loadingSafe;
    };

    offLoadingSafe() {
        setTimeout(() => {
            this.loadingSafe = false
        }, 800);
    };

    onLoadingSafe() {
        this.loadingSafe = true;
    }

    getLoadingMenuComponents() {
        return this.loadingMenuComponents;
    }

    onLoadingMenuComponents() {
       this.loadingMenuComponents = true;
    }

    offLoadingMenuComponents() {
        setTimeout(() => {
            this.loadingMenuComponents = false;
        }, 800);
    }

    getLoadingResale() {
        return this.loadingResale;
    };

    offLoadingResale() {
        setTimeout(() => {
            this.loadingResale = false;
        }, 800);
    };

    onLoadingResale() {
        this.loadingResale = true;
    }


    getLoadingAdvancedFilter() {
        return this.loadingAdvancedFilter;
    };

    offLoadingAdvancedFilter() {
        setTimeout(() => {
            this.loadingAdvancedFilter = false;
        }, 800);
    };

    onLoadingAdvancedFilter() {
        this.loadingAdvancedFilter = true;
    }

}
