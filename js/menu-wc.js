'use strict'; customElements.define('compodoc-menu', class extends HTMLElement { constructor() { super(); this.isNormalMode
= this.getAttribute('mode') === 'normal'; } connectedCallback() { this.render(this.isNormalMode); } render(isNormalMode)
{ let tp = lithtml.html(`
<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">@apttus/ecommerce documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                <li class="link">
                    <a href="overview.html" data-type="chapter-link">
                        <span class="icon ion-ios-keypad"></span>Overview
                    </a>
                </li>
                <li class="link">
                    <a href="index.html" data-type="chapter-link">
                        <span class="icon ion-ios-paper"></span>README
                    </a>
                </li>
 
                <li class="link">
                    <a href="changelog.html"  data-type="chapter-link">
                        <span class="icon ion-ios-paper"></span>CHANGELOG
                    </a>
                </li>
                 
                <li class="link">
                    <a href="dependencies.html" data-type="chapter-link">
                        <span class="icon ion-ios-list"></span>Dependencies
                    </a>
                </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"' :
                'data-target="#xs-additional-pages"'}>
                <span class="icon ion-ios-book"></span>
                <span>Additional documentation</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse" ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                <li class="link ">
                    <a href="additional-documentation/apttus-copyright-disclaimer.html" data-type="entity-link" data-context-id="additional">Apttus Copyright Disclaimer</a>
                </li>
            </ul>
        </li>
         
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ? 'data-target="#modules-links"' :
                    'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                <li class="link">
                    <a href="modules/CartModule.html" data-type="entity-link">CartModule</a>
                    <li class="chapter inner">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links-module-CartModule-517bd01c7b6158894e4154ead5b8d89c"' :
                            'data-target="#xs-components-links-module-CartModule-517bd01c7b6158894e4154ead5b8d89c"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartModule-517bd01c7b6158894e4154ead5b8d89c"' : 'id="xs-components-links-module-CartModule-517bd01c7b6158894e4154ead5b8d89c"' }>
                            <li class="link">
                                <a href="components/AddToCartComponent.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">AddToCartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MiniCartComponent.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">MiniCartComponent</a>
                            </li>
                        </ul>
                    </li>
                       
                    <li class="chapter inner">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links-module-CartModule-517bd01c7b6158894e4154ead5b8d89c"' :
                            'data-target="#xs-injectables-links-module-CartModule-517bd01c7b6158894e4154ead5b8d89c"' }>
                            <span class="icon ion-md-arrow-round-down"></span>
                            <span>Injectables</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartModule-517bd01c7b6158894e4154ead5b8d89c"' : 'id="xs-injectables-links-module-CartModule-517bd01c7b6158894e4154ead5b8d89c"' }>
                            <li class="link">
                                <a href="injectables/CartService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>CartService</a>
                            </li>
                        </ul>
                    </li>
                                     </li>
                <li class="link">
                    <a href="modules/CatalogModule.html" data-type="entity-link">CatalogModule</a>
                    <li class="chapter inner">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links-module-CatalogModule-ecd6ecfe560c8b0077bb0d820002929a"' :
                            'data-target="#xs-components-links-module-CatalogModule-ecd6ecfe560c8b0077bb0d820002929a"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CatalogModule-ecd6ecfe560c8b0077bb0d820002929a"' : 'id="xs-components-links-module-CatalogModule-ecd6ecfe560c8b0077bb0d820002929a"' }>
                            <li class="link">
                                <a href="components/BreadcrumbComponent.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">BreadcrumbComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCardComponent.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">ProductCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCarouselComponent.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">ProductCarouselComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductImagesComponent.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">ProductImagesComponent</a>
                            </li>
                        </ul>
                    </li>
                       
                    <li class="chapter inner">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links-module-CatalogModule-ecd6ecfe560c8b0077bb0d820002929a"' :
                            'data-target="#xs-injectables-links-module-CatalogModule-ecd6ecfe560c8b0077bb0d820002929a"' }>
                            <span class="icon ion-md-arrow-round-down"></span>
                            <span>Injectables</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CatalogModule-ecd6ecfe560c8b0077bb0d820002929a"' : 'id="xs-injectables-links-module-CatalogModule-ecd6ecfe560c8b0077bb0d820002929a"' }>
                            <li class="link">
                                <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>CategoryService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ProductAttributeRuleService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>ProductAttributeRuleService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ProductAttributeService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>ProductAttributeService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ProductOptionGroupService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>ProductOptionGroupService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ProductOptionService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>ProductOptionService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>ProductService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SearchService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>SearchService</a>
                            </li>
                        </ul>
                    </li>
                                     </li>
                <li class="link">
                    <a href="modules/ConstraintsModule.html" data-type="entity-link">ConstraintsModule</a>
   
                    <li class="chapter inner">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links-module-ConstraintsModule-a75d425c2b084e58074e9d6f8f653889"' :
                            'data-target="#xs-injectables-links-module-ConstraintsModule-a75d425c2b084e58074e9d6f8f653889"' }>
                            <span class="icon ion-md-arrow-round-down"></span>
                            <span>Injectables</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConstraintsModule-a75d425c2b084e58074e9d6f8f653889"' : 'id="xs-injectables-links-module-ConstraintsModule-a75d425c2b084e58074e9d6f8f653889"' }>
                            <li class="link">
                                <a href="injectables/ConstraintRuleConditionService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>ConstraintRuleConditionService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ConstraintRuleService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>ConstraintRuleService</a>
                            </li>
                        </ul>
                    </li>
                                     </li>
                <li class="link">
                    <a href="modules/CrmModule.html" data-type="entity-link">CrmModule</a>
   
                    <li class="chapter inner">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links-module-CrmModule-5a78bb268d2bd2c84ec05ba3446e9fcf"' :
                            'data-target="#xs-injectables-links-module-CrmModule-5a78bb268d2bd2c84ec05ba3446e9fcf"' }>
                            <span class="icon ion-md-arrow-round-down"></span>
                            <span>Injectables</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CrmModule-5a78bb268d2bd2c84ec05ba3446e9fcf"' : 'id="xs-injectables-links-module-CrmModule-5a78bb268d2bd2c84ec05ba3446e9fcf"' }>
                            <li class="link">
                                <a href="injectables/AccountLocationService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>AccountLocationService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/AccountService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>AccountService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ContactService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>ContactService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/EmailService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>EmailService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>UserService</a>
                            </li>
                        </ul>
                    </li>
                                     </li>
                <li class="link">
                    <a href="modules/DocGenModule.html" data-type="entity-link">DocGenModule</a>
   
                    <li class="chapter inner">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links-module-DocGenModule-310f296864560065105bc441bd1f68bd"' :
                            'data-target="#xs-injectables-links-module-DocGenModule-310f296864560065105bc441bd1f68bd"' }>
                            <span class="icon ion-md-arrow-round-down"></span>
                            <span>Injectables</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DocGenModule-310f296864560065105bc441bd1f68bd"' : 'id="xs-injectables-links-module-DocGenModule-310f296864560065105bc441bd1f68bd"' }>
                            <li class="link">
                                <a href="injectables/TemplateService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>TemplateService</a>
                            </li>
                        </ul>
                    </li>
                                     </li>
                <li class="link">
                    <a href="modules/OrderModule.html" data-type="entity-link">OrderModule</a>
   
                    <li class="chapter inner">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links-module-OrderModule-dbf9ff7fe3071fe3d321f497009d94f0"' :
                            'data-target="#xs-injectables-links-module-OrderModule-dbf9ff7fe3071fe3d321f497009d94f0"' }>
                            <span class="icon ion-md-arrow-round-down"></span>
                            <span>Injectables</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-dbf9ff7fe3071fe3d321f497009d94f0"' : 'id="xs-injectables-links-module-OrderModule-dbf9ff7fe3071fe3d321f497009d94f0"' }>
                            <li class="link">
                                <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>OrderService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/QuoteService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>QuoteService</a>
                            </li>
                        </ul>
                    </li>
                                     </li>
                <li class="link">
                    <a href="modules/PricingModule.html" data-type="entity-link">PricingModule</a>
                    <li class="chapter inner">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links-module-PricingModule-712b6a62d31c9dd7e8f75dbaa007f9b4"' :
                            'data-target="#xs-components-links-module-PricingModule-712b6a62d31c9dd7e8f75dbaa007f9b4"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PricingModule-712b6a62d31c9dd7e8f75dbaa007f9b4"' : 'id="xs-components-links-module-PricingModule-712b6a62d31c9dd7e8f75dbaa007f9b4"' }>
                            <li class="link">
                                <a href="components/PriceComponent.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">PriceComponent</a>
                            </li>
                        </ul>
                    </li>
                       
                    <li class="chapter inner">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links-module-PricingModule-712b6a62d31c9dd7e8f75dbaa007f9b4"' :
                            'data-target="#xs-injectables-links-module-PricingModule-712b6a62d31c9dd7e8f75dbaa007f9b4"' }>
                            <span class="icon ion-md-arrow-round-down"></span>
                            <span>Injectables</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PricingModule-712b6a62d31c9dd7e8f75dbaa007f9b4"' : 'id="xs-injectables-links-module-PricingModule-712b6a62d31c9dd7e8f75dbaa007f9b4"' }>
                            <li class="link">
                                <a href="injectables/ConversionService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>ConversionService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PriceListItemService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>PriceListItemService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PriceListService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>PriceListService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PriceMatrixService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>PriceMatrixService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PriceRuleService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>PriceRuleService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PriceService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>PriceService</a>
                            </li>
                        </ul>
                    </li>
                     
                    <li class="chapter inner">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links-module-PricingModule-712b6a62d31c9dd7e8f75dbaa007f9b4"' :
                            'data-target="#xs-pipes-links-module-PricingModule-712b6a62d31c9dd7e8f75dbaa007f9b4"' }>
                            <span class="icon ion-md-add"></span>
                            <span>Pipes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PricingModule-712b6a62d31c9dd7e8f75dbaa007f9b4"' : 'id="xs-pipes-links-module-PricingModule-712b6a62d31c9dd7e8f75dbaa007f9b4"' }>
                            <li class="link">
                                <a href="pipes/AttributeValuePricePipe.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">AttributeValuePricePipe</a>
                            </li>
                            <li class="link">
                                <a href="pipes/CartItemPricePipe.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">CartItemPricePipe</a>
                            </li>
                            <li class="link">
                                <a href="pipes/CartPricePipe.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">CartPricePipe</a>
                            </li>
                            <li class="link">
                                <a href="pipes/FormatCurrencyPipe.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">FormatCurrencyPipe</a>
                            </li>
                            <li class="link">
                                <a href="pipes/LocalCurrencyPipe.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">LocalCurrencyPipe</a>
                            </li>
                            <li class="link">
                                <a href="pipes/OptionPricePipe.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">OptionPricePipe</a>
                            </li>
                            <li class="link">
                                <a href="pipes/OrderPricePipe.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">OrderPricePipe</a>
                            </li>
                            <li class="link">
                                <a href="pipes/PriceMatrixFilter.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">PriceMatrixFilter</a>
                            </li>
                            <li class="link">
                                <a href="pipes/ProductPricePipe.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">ProductPricePipe</a>
                            </li>
                        </ul>
                    </li>
                </li>
                <li class="link">
                    <a href="modules/StoreModule.html" data-type="entity-link">StoreModule</a>
                    <li class="chapter inner">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links-module-StoreModule-a934f3c686f932ad7583d850f4762831"' :
                            'data-target="#xs-components-links-module-StoreModule-a934f3c686f932ad7583d850f4762831"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StoreModule-a934f3c686f932ad7583d850f4762831"' : 'id="xs-components-links-module-StoreModule-a934f3c686f932ad7583d850f4762831"' }>
                            <li class="link">
                                <a href="components/AddressComponent.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">AddressComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DependentPicklistComponent.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">DependentPicklistComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputFieldComponent.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">InputFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputQuantityComponent.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">InputQuantityComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/JumbotronComponent.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">JumbotronComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MdSpinnerComponent.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">MdSpinnerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MiniProfileComponent.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules">MiniProfileComponent</a>
                            </li>
                        </ul>
                    </li>
                       
                    <li class="chapter inner">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links-module-StoreModule-a934f3c686f932ad7583d850f4762831"' :
                            'data-target="#xs-injectables-links-module-StoreModule-a934f3c686f932ad7583d850f4762831"' }>
                            <span class="icon ion-md-arrow-round-down"></span>
                            <span>Injectables</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StoreModule-a934f3c686f932ad7583d850f4762831"' : 'id="xs-injectables-links-module-StoreModule-a934f3c686f932ad7583d850f4762831"' }>
                            <li class="link">
                                <a href="injectables/StorefrontService.html" data-type="entity-link" data-context="sub-entity"
                                    data-context-id="modules" }>StorefrontService</a>
                            </li>
                        </ul>
                    </li>
                                     </li>
            </ul>
        </li>
              
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                <li class="link">
                    <a href="classes/Account.html" data-type="entity-link">Account</a>
                </li>
                <li class="link">
                    <a href="classes/AccountBase.html" data-type="entity-link">AccountBase</a>
                </li>
                <li class="link">
                    <a href="classes/AccountLocation.html" data-type="entity-link">AccountLocation</a>
                </li>
                <li class="link">
                    <a href="classes/ApprovalRequest.html" data-type="entity-link">ApprovalRequest</a>
                </li>
                <li class="link">
                    <a href="classes/Attachment.html" data-type="entity-link">Attachment</a>
                </li>
                <li class="link">
                    <a href="classes/Cart.html" data-type="entity-link">Cart</a>
                </li>
                <li class="link">
                    <a href="classes/CartItem.html" data-type="entity-link">CartItem</a>
                </li>
                <li class="link">
                    <a href="classes/Category.html" data-type="entity-link">Category</a>
                </li>
                <li class="link">
                    <a href="classes/CategoryData.html" data-type="entity-link">CategoryData</a>
                </li>
                <li class="link">
                    <a href="classes/CategoryTranslation.html" data-type="entity-link">CategoryTranslation</a>
                </li>
                <li class="link">
                    <a href="classes/Classification.html" data-type="entity-link">Classification</a>
                </li>
                <li class="link">
                    <a href="classes/ConstraintRule.html" data-type="entity-link">ConstraintRule</a>
                </li>
                <li class="link">
                    <a href="classes/ConstraintRuleAction.html" data-type="entity-link">ConstraintRuleAction</a>
                </li>
                <li class="link">
                    <a href="classes/ConstraintRuleCondition.html" data-type="entity-link">ConstraintRuleCondition</a>
                </li>
                <li class="link">
                    <a href="classes/Contact.html" data-type="entity-link">Contact</a>
                </li>
                <li class="link">
                    <a href="classes/CurrencyType.html" data-type="entity-link">CurrencyType</a>
                </li>
                <li class="link">
                    <a href="classes/DataManager.html" data-type="entity-link">DataManager</a>
                </li>
                <li class="link">
                    <a href="classes/Feature.html" data-type="entity-link">Feature</a>
                </li>
                <li class="link">
                    <a href="classes/FeatureSet.html" data-type="entity-link">FeatureSet</a>
                </li>
                <li class="link">
                    <a href="classes/Order.html" data-type="entity-link">Order</a>
                </li>
                <li class="link">
                    <a href="classes/OrderLineItem.html" data-type="entity-link">OrderLineItem</a>
                </li>
                <li class="link">
                    <a href="classes/Price.html" data-type="entity-link">Price</a>
                </li>
                <li class="link">
                    <a href="classes/PriceDimension.html" data-type="entity-link">PriceDimension</a>
                </li>
                <li class="link">
                    <a href="classes/PriceDimensionBase.html" data-type="entity-link">PriceDimensionBase</a>
                </li>
                <li class="link">
                    <a href="classes/PriceList.html" data-type="entity-link">PriceList</a>
                </li>
                <li class="link">
                    <a href="classes/PriceListBase.html" data-type="entity-link">PriceListBase</a>
                </li>
                <li class="link">
                    <a href="classes/PriceListCategory.html" data-type="entity-link">PriceListCategory</a>
                </li>
                <li class="link">
                    <a href="classes/PriceListData.html" data-type="entity-link">PriceListData</a>
                </li>
                <li class="link">
                    <a href="classes/PriceListItem.html" data-type="entity-link">PriceListItem</a>
                </li>
                <li class="link">
                    <a href="classes/PriceMatrix.html" data-type="entity-link">PriceMatrix</a>
                </li>
                <li class="link">
                    <a href="classes/PriceMatrixEntry.html" data-type="entity-link">PriceMatrixEntry</a>
                </li>
                <li class="link">
                    <a href="classes/PriceRule.html" data-type="entity-link">PriceRule</a>
                </li>
                <li class="link">
                    <a href="classes/PriceRuleEntry.html" data-type="entity-link">PriceRuleEntry</a>
                </li>
                <li class="link">
                    <a href="classes/PriceRuleSet.html" data-type="entity-link">PriceRuleSet</a>
                </li>
                <li class="link">
                    <a href="classes/Product.html" data-type="entity-link">Product</a>
                </li>
                <li class="link">
                    <a href="classes/ProductAttribute.html" data-type="entity-link">ProductAttribute</a>
                </li>
                <li class="link">
                    <a href="classes/ProductAttributeGroup.html" data-type="entity-link">ProductAttributeGroup</a>
                </li>
                <li class="link">
                    <a href="classes/ProductAttributeGroupMember.html" data-type="entity-link">ProductAttributeGroupMember</a>
                </li>
                <li class="link">
                    <a href="classes/ProductAttributeRule.html" data-type="entity-link">ProductAttributeRule</a>
                </li>
                <li class="link">
                    <a href="classes/ProductAttributeRuleAction.html" data-type="entity-link">ProductAttributeRuleAction</a>
                </li>
                <li class="link">
                    <a href="classes/ProductAttributeRuleView.html" data-type="entity-link">ProductAttributeRuleView</a>
                </li>
                <li class="link">
                    <a href="classes/ProductAttributeValue.html" data-type="entity-link">ProductAttributeValue</a>
                </li>
                <li class="link">
                    <a href="classes/ProductCategory.html" data-type="entity-link">ProductCategory</a>
                </li>
                <li class="link">
                    <a href="classes/ProductData.html" data-type="entity-link">ProductData</a>
                </li>
                <li class="link">
                    <a href="classes/ProductFeatureValue.html" data-type="entity-link">ProductFeatureValue</a>
                </li>
                <li class="link">
                    <a href="classes/ProductGroup.html" data-type="entity-link">ProductGroup</a>
                </li>
                <li class="link">
                    <a href="classes/ProductGroupMember.html" data-type="entity-link">ProductGroupMember</a>
                </li>
                <li class="link">
                    <a href="classes/ProductInformation.html" data-type="entity-link">ProductInformation</a>
                </li>
                <li class="link">
                    <a href="classes/ProductOptionComponent.html" data-type="entity-link">ProductOptionComponent</a>
                </li>
                <li class="link">
                    <a href="classes/ProductOptionGroup.html" data-type="entity-link">ProductOptionGroup</a>
                </li>
                <li class="link">
                    <a href="classes/ProductOptionPrice.html" data-type="entity-link">ProductOptionPrice</a>
                </li>
                <li class="link">
                    <a href="classes/ProductTranslation.html" data-type="entity-link">ProductTranslation</a>
                </li>
                <li class="link">
                    <a href="classes/Quote.html" data-type="entity-link">Quote</a>
                </li>
                <li class="link">
                    <a href="classes/QuoteLineItem.html" data-type="entity-link">QuoteLineItem</a>
                </li>
                <li class="link">
                    <a href="classes/StoreBanner.html" data-type="entity-link">StoreBanner</a>
                </li>
                <li class="link">
                    <a href="classes/Storefront.html" data-type="entity-link">Storefront</a>
                </li>
                <li class="link">
                    <a href="classes/StorefrontData.html" data-type="entity-link">StorefrontData</a>
                </li>
                <li class="link">
                    <a href="classes/SummaryGroup.html" data-type="entity-link">SummaryGroup</a>
                </li>
                <li class="link">
                    <a href="classes/Template.html" data-type="entity-link">Template</a>
                </li>
                <li class="link">
                    <a href="classes/User.html" data-type="entity-link">User</a>
                </li>
                <li class="link">
                    <a href="classes/UserBase.html" data-type="entity-link">UserBase</a>
                </li>
            </ul>
        </li>
            
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                <li class="link">
                    <a href="interfaces/Aggregate.html" data-type="entity-link">Aggregate</a>
                </li>
                <li class="link">
                    <a href="interfaces/CartProductForm.html" data-type="entity-link">CartProductForm</a>
                </li>
                <li class="link">
                    <a href="interfaces/DependentPicklistValue.html" data-type="entity-link">DependentPicklistValue</a>
                </li>
                <li class="link">
                    <a href="interfaces/MailContent.html" data-type="entity-link">MailContent</a>
                </li>
                <li class="link">
                    <a href="interfaces/PicklistValue.html" data-type="entity-link">PicklistValue</a>
                </li>
                <li class="link">
                    <a href="interfaces/PriceForm.html" data-type="entity-link">PriceForm</a>
                </li>
                <li class="link">
                    <a href="interfaces/PriceTier.html" data-type="entity-link">PriceTier</a>
                </li>
                <li class="link">
                    <a href="interfaces/ProductAttributeMap.html" data-type="entity-link">ProductAttributeMap</a>
                </li>
                <li class="link">
                    <a href="interfaces/ProductOptionForm.html" data-type="entity-link">ProductOptionForm</a>
                </li>
                <li class="link">
                    <a href="interfaces/ProductQuantityMap.html" data-type="entity-link">ProductQuantityMap</a>
                </li>
                <li class="link">
                    <a href="interfaces/SearchResults.html" data-type="entity-link">SearchResults</a>
                </li>
            </ul>
        </li>
            
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"' :
                'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
 
                <li class="link">
                    <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                </li>
                  
                <li class="link">
                    <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                </li>
            </ul>
        </li>
                  </ul>
</nav>`); this.innerHTML = tp.strings; } });