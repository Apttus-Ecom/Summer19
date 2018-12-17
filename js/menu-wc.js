'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
constructor() {
super();
this.isNormalMode = this.getAttribute('mode') === 'normal';
}

connectedCallback() {
this.render(this.isNormalMode);
}

render(isNormalMode) {
let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">Apttus Ecommerce</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
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
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                : 'data-target="#xs-additional-pages"' }>
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
                <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                    'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                <li class="link">
                    <a href="modules/CartModule.html" data-type="entity-link">CartModule</a>
                <li class="chapter inner">
                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                        'data-target="#components-links-module-CartModule-5caa3501b0d4c9738ad0c40359093464"' : 'data-target="#xs-components-links-module-CartModule-5caa3501b0d4c9738ad0c40359093464"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartModule-5caa3501b0d4c9738ad0c40359093464"' :
                        'id="xs-components-links-module-CartModule-5caa3501b0d4c9738ad0c40359093464"' }>
                        <li class="link">
                            <a href="components/AddToCartComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddToCartComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/AddToCartDialogComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddToCartDialogComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/MiniCartComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MiniCartComponent</a>
                        </li>
                    </ul>
                </li>
        </li>
                <li class="link">
                    <a href="modules/CatalogModule.html" data-type="entity-link">CatalogModule</a>
                <li class="chapter inner">
                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                        'data-target="#components-links-module-CatalogModule-8ddee476445c0b4845646538a28bb464"' : 'data-target="#xs-components-links-module-CatalogModule-8ddee476445c0b4845646538a28bb464"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CatalogModule-8ddee476445c0b4845646538a28bb464"' :
                        'id="xs-components-links-module-CatalogModule-8ddee476445c0b4845646538a28bb464"' }>
                        <li class="link">
                            <a href="components/BreadcrumbComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/ProductCardComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductCardComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/ProductCarouselComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductCarouselComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/ProductImagesComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductImagesComponent</a>
                        </li>
                    </ul>
                </li>
        </li>
                <li class="link">
                    <a href="modules/ConstraintRulesModule.html" data-type="entity-link">ConstraintRulesModule</a>
                <li class="chapter inner">
                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                        'data-target="#components-links-module-ConstraintRulesModule-bf198ff13de30cab4f90554df30a67b4"' : 'data-target="#xs-components-links-module-ConstraintRulesModule-bf198ff13de30cab4f90554df30a67b4"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConstraintRulesModule-bf198ff13de30cab4f90554df30a67b4"' :
                        'id="xs-components-links-module-ConstraintRulesModule-bf198ff13de30cab4f90554df30a67b4"' }>
                        <li class="link">
                            <a href="components/CRAddToCartComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CRAddToCartComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/CRConstraintAlertComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CRConstraintAlertComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/CRIconComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CRIconComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/CRModalComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CRModalComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/CRPopoverComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CRPopoverComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/CRProductCardComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CRProductCardComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/CRProductCarouselComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CRProductCarouselComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/CRRecommendedProductsComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CRRecommendedProductsComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/CRSideMenuComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CRSideMenuComponent</a>
                        </li>
                    </ul>
                </li>
        </li>
                <li class="link">
                    <a href="modules/PricingModule.html" data-type="entity-link">PricingModule</a>
                <li class="chapter inner">
                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                        'data-target="#components-links-module-PricingModule-bd26197caac624b359fff24d6be74ea1"' : 'data-target="#xs-components-links-module-PricingModule-bd26197caac624b359fff24d6be74ea1"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PricingModule-bd26197caac624b359fff24d6be74ea1"' :
                        'id="xs-components-links-module-PricingModule-bd26197caac624b359fff24d6be74ea1"' }>
                        <li class="link">
                            <a href="components/PriceComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">PriceComponent</a>
                        </li>
                    </ul>
                </li>
                <li class="chapter inner">
                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                        'data-target="#injectables-links-module-PricingModule-bd26197caac624b359fff24d6be74ea1"' : 'data-target="#xs-injectables-links-module-PricingModule-bd26197caac624b359fff24d6be74ea1"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PricingModule-bd26197caac624b359fff24d6be74ea1"' :
                        'id="xs-injectables-links-module-PricingModule-bd26197caac624b359fff24d6be74ea1"' }>
                        <li class="link">
                            <a href="injectables/PriceService.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PriceService</a>
                        </li>
                    </ul>
                </li>
                <li class="chapter inner">
                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                        'data-target="#pipes-links-module-PricingModule-bd26197caac624b359fff24d6be74ea1"' : 'data-target="#xs-pipes-links-module-PricingModule-bd26197caac624b359fff24d6be74ea1"' }>
                        <span class="icon ion-md-add"></span>
                        <span>Pipes</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PricingModule-bd26197caac624b359fff24d6be74ea1"' :
                        'id="xs-pipes-links-module-PricingModule-bd26197caac624b359fff24d6be74ea1"' }>
                        <li class="link">
                            <a href="pipes/AttributeValuePricePipe.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttributeValuePricePipe</a>
                        </li>
                        <li class="link">
                            <a href="pipes/CartItemPricePipe.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartItemPricePipe</a>
                        </li>
                        <li class="link">
                            <a href="pipes/CartPricePipe.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartPricePipe</a>
                        </li>
                        <li class="link">
                            <a href="pipes/FormatCurrencyPipe.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormatCurrencyPipe</a>
                        </li>
                        <li class="link">
                            <a href="pipes/LocalCurrencyPipe.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocalCurrencyPipe</a>
                        </li>
                        <li class="link">
                            <a href="pipes/OptionPricePipe.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">OptionPricePipe</a>
                        </li>
                        <li class="link">
                            <a href="pipes/OrderPricePipe.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrderPricePipe</a>
                        </li>
                        <li class="link">
                            <a href="pipes/PriceMatrixFilter.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">PriceMatrixFilter</a>
                        </li>
                        <li class="link">
                            <a href="pipes/ProductPricePipe.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductPricePipe</a>
                        </li>
                    </ul>
                </li>
        </li>
                <li class="link">
                    <a href="modules/StoreModule.html" data-type="entity-link">StoreModule</a>
                <li class="chapter inner">
                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                        'data-target="#components-links-module-StoreModule-d1f19282e4ccf8ea46e4ca1a8c2d9fb6"' : 'data-target="#xs-components-links-module-StoreModule-d1f19282e4ccf8ea46e4ca1a8c2d9fb6"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StoreModule-d1f19282e4ccf8ea46e4ca1a8c2d9fb6"' :
                        'id="xs-components-links-module-StoreModule-d1f19282e4ccf8ea46e4ca1a8c2d9fb6"' }>
                        <li class="link">
                            <a href="components/AddressComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddressComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/DependentPicklistComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DependentPicklistComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/InputFieldComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputFieldComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/InputQuantityComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputQuantityComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/JumbotronComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">JumbotronComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/MdSpinnerComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MdSpinnerComponent</a>
                        </li>
                        <li class="link">
                            <a href="components/MiniProfileComponent.html"
                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MiniProfileComponent</a>
                        </li>
                    </ul>
                </li>
        </li>
    </ul>
    </li>
    <li class="chapter">
        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
            'data-target="#xs-components-links"' }>
            <span class="icon ion-md-cog"></span>
            <span>Components</span>
            <span class="icon ion-ios-arrow-down"></span>
        </div>
        <ul class="links collapse" ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
            <li class="link">
                <a href="components/CRModalComponent.html" data-type="entity-link">CRModalComponent</a>
            </li>
            <li class="link">
                <a href="components/CRPopoverComponent.html" data-type="entity-link">CRPopoverComponent</a>
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
                <a href="classes/AppliedRuleActionInfo.html" data-type="entity-link">AppliedRuleActionInfo</a>
            </li>
            <li class="link">
                <a href="classes/AppliedRuleInfo.html" data-type="entity-link">AppliedRuleInfo</a>
            </li>
            <li class="link">
                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
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
                <a href="classes/CRCart.html" data-type="entity-link">CRCart</a>
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
        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
            'data-target="#xs-injectables-links"' }>
            <span class="icon ion-md-arrow-round-down"></span>
            <span>Injectables</span>
            <span class="icon ion-ios-arrow-down"></span>
        </div>
        <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
            <li class="link">
                <a href="injectables/AccountLocationService.html" data-type="entity-link">AccountLocationService</a>
            </li>
            <li class="link">
                <a href="injectables/AccountService.html" data-type="entity-link">AccountService</a>
            </li>
            <li class="link">
                <a href="injectables/AicUserService.html" data-type="entity-link">AicUserService</a>
            </li>
            <li class="link">
                <a href="injectables/CartItemService.html" data-type="entity-link">CartItemService</a>
            </li>
            <li class="link">
                <a href="injectables/CartService.html" data-type="entity-link">CartService</a>
            </li>
            <li class="link">
                <a href="injectables/CategoryService.html" data-type="entity-link">CategoryService</a>
            </li>
            <li class="link">
                <a href="injectables/ConstraintRuleActionService.html" data-type="entity-link">ConstraintRuleActionService</a>
            </li>
            <li class="link">
                <a href="injectables/ConstraintRuleConditionService.html" data-type="entity-link">ConstraintRuleConditionService</a>
            </li>
            <li class="link">
                <a href="injectables/ConstraintRuleService.html" data-type="entity-link">ConstraintRuleService</a>
            </li>
            <li class="link">
                <a href="injectables/ContactService.html" data-type="entity-link">ContactService</a>
            </li>
            <li class="link">
                <a href="injectables/ConversionService.html" data-type="entity-link">ConversionService</a>
            </li>
            <li class="link">
                <a href="injectables/EmailService.html" data-type="entity-link">EmailService</a>
            </li>
            <li class="link">
                <a href="injectables/OrderService.html" data-type="entity-link">OrderService</a>
            </li>
            <li class="link">
                <a href="injectables/PriceListItemService.html" data-type="entity-link">PriceListItemService</a>
            </li>
            <li class="link">
                <a href="injectables/PriceListService.html" data-type="entity-link">PriceListService</a>
            </li>
            <li class="link">
                <a href="injectables/PriceMatrixService.html" data-type="entity-link">PriceMatrixService</a>
            </li>
            <li class="link">
                <a href="injectables/PriceRuleService.html" data-type="entity-link">PriceRuleService</a>
            </li>
            <li class="link">
                <a href="injectables/PriceService.html" data-type="entity-link">PriceService</a>
            </li>
            <li class="link">
                <a href="injectables/ProductAttributeRuleService.html" data-type="entity-link">ProductAttributeRuleService</a>
            </li>
            <li class="link">
                <a href="injectables/ProductAttributeService.html" data-type="entity-link">ProductAttributeService</a>
            </li>
            <li class="link">
                <a href="injectables/ProductOptionGroupService.html" data-type="entity-link">ProductOptionGroupService</a>
            </li>
            <li class="link">
                <a href="injectables/ProductOptionService.html" data-type="entity-link">ProductOptionService</a>
            </li>
            <li class="link">
                <a href="injectables/ProductService.html" data-type="entity-link">ProductService</a>
            </li>
            <li class="link">
                <a href="injectables/SearchService.html" data-type="entity-link">SearchService</a>
            </li>
            <li class="link">
                <a href="injectables/SfUserService.html" data-type="entity-link">SfUserService</a>
            </li>
            <li class="link">
                <a href="injectables/StorefrontService.html" data-type="entity-link">StorefrontService</a>
            </li>
            <li class="link">
                <a href="injectables/TemplateService.html" data-type="entity-link">TemplateService</a>
            </li>
            <li class="link">
                <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
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
                <a href="interfaces/AlertMessage.html" data-type="entity-link">AlertMessage</a>
            </li>
            <li class="link">
                <a href="interfaces/AlertMessage-1.html" data-type="entity-link">AlertMessage</a>
            </li>
            <li class="link">
                <a href="interfaces/CartProductForm.html" data-type="entity-link">CartProductForm</a>
            </li>
            <li class="link">
                <a href="interfaces/DependentPicklistValue.html" data-type="entity-link">DependentPicklistValue</a>
            </li>
            <li class="link">
                <a href="interfaces/IUserService.html" data-type="entity-link">IUserService</a>
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
                <a href="interfaces/SearchResults.html" data-type="entity-link">SearchResults</a>
            </li>
        </ul>
    </li>
    <li class="chapter">
        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
            : 'data-target="#xs-miscellaneous-links"' }>
            <span class="icon ion-ios-cube"></span>
            <span>Miscellaneous</span>
            <span class="icon ion-ios-arrow-down"></span>
        </div>
        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
            <li class="link">
                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
            </li>
            <li class="link">
                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
            </li>
            <li class="link">
                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
            </li>
        </ul>
    </li>
    </ul>
</nav>`);
this.innerHTML = tp.strings;
}
});