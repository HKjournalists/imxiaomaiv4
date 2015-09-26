angular.module("xiaomaiApp").run(["$templateCache", function($templateCache) {$templateCache.put("../assets/views/active/active.html","<div class=\"pub-header\">\n  <div back-icon class=\"iconfont icon-back\" ng-click=\"goback();\"></div>\n  <div class=\"location-info\">{{activityShowName}}</div>\n  <div class=\"iconfont icon-locate-right\"></div>\n</div>\n\n<div class=\"activeWrap\" down-tip-cls=\"{{\'skactive-downtip\'}}\" xiaomai-iscroll subname=\"{{\'activeheightstatus\'}}\" pubname=\"{{\'activeiscrollupdate\'}}\">\n  <div>\n    <div class=\"banner\">\n      <ks-swiper-container on-ready=\"onReadySwiper(swiper)\" swiper=\"swiper\">\n        <ks-swiper-slide class=\"swiper-slide\" ng-repeat=\"banner in banners\">\n          <div class=\"activeGoodBanner\" ng-click=\"gotoActive(banner);\" ng-style=\"{\'background-image\':\'url(\'+banner.imageUrl+\')\'}\"></div>\n        </ks-swiper-slide>\n      </ks-swiper-container>\n    </div>\n    <ul class=\"activeGoodList\">\n      <li class=\"errortip\" ng-if=\"haserror\">\n        错误提示....\n      </li>\n      <li class=\"loading\" ng-if=\"isloading\">\n        loading....\n      </li>\n      <li ng-repeat=\"good in goods\">\n        <div class=\"goodItem\">\n          <div class=\"imgCont\" ng-click=\"gotoDetail(good);\" ng-style=\'{\"background-image\":\"url(\"+good.imageUrl+\")\"}\'>\n            <label class=\"label\" ng-class=\"{\'ldc\':$index==0,\'rdc\':$index===1}\" ng-repeat=\"label in good.distributeTypeDisplay\" ng-show=\"label.length\">{{label}}</label>\n          </div>\n          <div class=\"details\">\n<!-- 输出标签29分钟达/次日达 -->\n            <p class=\"goodname\" ng-click=\"gotoDetail(good);\">{{good.activityGoodsName}}</p>\n            <p class=\"priceCont\">\n<!-- 单品或者组合最高价-->\n              <span class=\"new-price\" ng-if=\"good.goodsType==1||good.goodsType==2\">\n                &yen;<i>{{good.skuList[0].activityPrice|xiaomaiprice}}</i>\n              </span>\n              <span class=\"old-price\" ng-if=\"good.goodsType==1||good.goodsType==2\">\n                &yen;{{good.skuList[0].originPrice|xiaomaiprice}}</span>\n<!-- 聚合 -->\n              <span class=\"aggregate-price\" ng-if=\"good.goodsType==3 && good.minWapPrice==good.maxWapPrice\">\n                &yen;{{good.minWapPrice|xiaomaiprice}}</span>\n              <span class=\"aggregate-price\" ng-if=\"good.goodsType==3 && good.minWapPrice!=good.maxWapPrice\">\n                &yen;{{good.minWapPrice|xiaomaiprice}} ~ &yen;{{good.maxWapPrice|xiaomaiprice}}\n              </span>\n            </p>\n            <p class=\"buy-icon iconfont icon-plus\" ng-class=\"{paying:good.isPaying}\" ng-click=\"buyHandler(good,$index);\" ng-if=\"good.goodsStatusDisplay!=3\"></p>\n            <p class=\"sold-out\" ng-if=\"good.goodsStatusDisplay==3\">补货中</p>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n");
$templateCache.put("../assets/views/active/nav.active.html","<div class=\"errortip\" ng-if=\"haserror\">\n  活动已经结束 去其他类目看看吧\n</div>\n<div class=\"loading\" ng-if=\"isloading\">\n  正在加载......\n</div>\n<div class=\"GoodsCont\">\n  <div class=\"GoodCont\" ng-repeat=\"good in goods\">\n  <div class=\"imgCont\" ng-click=\"gotoDetail(good);\" ng-style=\'{\"background-image\":\"url(\"+good.imageUrl+\")\"}\'></div>\n  <div class=\"details\">\n    <p class=\"goodname\" ng-click=\"gotoDetail(good);\">{{good.activityGoodsName}}</p>\n<!-- 输出标签29分钟达/次日达 -->\n    <label class=\"label\" ng-class=\"{\'ldc\':$index==0,\'rdc\':$index===1}\" ng-repeat=\"label in good.distributeTypeDisplay\" ng-show=\"label.length\">{{label}}</label>\n    <p class=\"priceCont\">\n<!-- 单品或者组合最高价-->\n      <span class=\"new-price\" ng-if=\"good.goodsType==1||good.goodsType==2\">\n        &yen;<i>{{good.skuList[0].activityPrice|xiaomaiprice}}</i>\n      </span>\n      <span class=\"old-price\" ng-if=\"good.goodsType==1||good.goodsType==2\">\n        &yen;{{good.skuList[0].originPrice|xiaomaiprice}}</span>\n<!-- 聚合 -->\n      <span class=\"aggregate-price\" ng-if=\"good.goodsType==3 && good.skuList[0].minWapPrice==good.skuList[0].maxWapPrice\">\n        &yen;{{good.skuList[0].minWapPrice|xiaomaiprice}}</span>\n      <span class=\"aggregate-price\" ng-if=\"good.goodsType==3 && good.skuList[0].minWapPrice!=good.skuList[0].maxWapPrice\">\n        &yen;{{good.skuList[0].minWapPrice|xiaomaiprice}} ~ &yen;{{good.skuList[0].maxWapPrice|xiaomaiprice}}\n      </span>\n    </p>\n    <p  ng-class=\"{paying:good.isPaying}\" class=\"buy-icon iconfont icon-plus\" ng-click=\"buyHandler(good,$index);\" ng-if=\"good.goodsStatusDisplay!=3\"></p>\n    <p class=\"sold-out\" ng-if=\"good.goodsStatusDisplay==3\">补货中</p>\n  </div>\n</div>\n</div>\n");
$templateCache.put("../assets/views/all/all.html","<style>\n  .category-active-list{\n    min-height:cacl();\n  }\n</style>\n<ul class=\"category-active-list\" style=\"\">\n  <li class=\"loading\" ng-if=\"isloading\">loading...</li>\n  <li class=\"errortip\" ng-if=\"haserror\">错误提示....</li>\n  <li ng-repeat=\"item in activities\" class=\"tag-active\" ng-click=\"goto(item);\" ng-style=\"{\'background-image\':\'url(\'+item.imageUrl+\')\'}\"></li>\n</ul>\n");
$templateCache.put("../assets/views/buy/buy.html","<div ui-view></div>\n<!-- 购物车x-->\n<div  ng-controller=\"buy.cartThumbCtrl\" class=\"pub-footer\">\n  <div class=\"cartThumb\" ng-class=\"{showcart:isShowCart,showdetail:isShowDetail}\">\n    <span class=\"iconfont icon-cart\" ng-click=\"gotoDetail();\">\n      <span class=\"totalCount\" ng-class=\"{big:hasChange}\" ng-show=\"totalCount && totalCount!=0\">{{totalCount}}</span>\n    </span>\n    <p class=\"totalPrice\" ng-show=\"totalCount && totalCount!=0\">共计<em>&yen;</em>\n      <span>{{totalPrice|xiaomaiprice}}</span></p>\n    <div class=\"gotoPay\" ng-show=\"totalCount && totalCount!=0\">选好了</div>\n    <p class=\"emptyTip\" ng-show=\"!totalCount || totalCount==0\">购物车是空的,快快选购吧~</p>\n  </div>\n\n  <div ng-class=\"{\'cartDetail-show\':showcart}\" class=\"cartDetail\" ng-controller=\"buy.cartDetailCtrl\">\n    <span class=\"goback\" ng-click=\"continueShop();\">继续购物<i class=\" iconfont icon-YF_more\"></i>\n    </span>\n    <div class=\"cartDetailWrap\">\n      <div class=\"haserror\" ng-click=\"goHomepage();\" ng-if=\"haserror\">购物车空了 赶快去<span>购物吧</span></div>\n      <div class=\"good-info\" ng-repeat=\"good in goods\">\n        <div class=\"goodWrap\">\n          <p class=\"good-title\">{{good.sourceType==2?good.activityGoodsName:good.bgGoodsName}}</p>\n          <p class=\"good-price\">&yen;{{good.minWapPrice|xiaomaiprice}}</p>\n          <lable class=\"label\" ng-class=\"{ldc:$index==0,rdc:$index==1}\" ng-repeat=\"distribute in good.distributeTypeDisplay\" ng-show=\"distribute.length\">{{distribute}}</lable>\n        </div>\n        <div class=\"iconWrap\">\n          <i  ng-class=\"{paying:isPaying}\" class=\"iconfont icon-minus\" ng-click=\"buyHandler(\'minus\',$index);\"></i>\n          <span class=\"good-count\">{{good.skuList[0].numInCart}}</span>\n          <i  ng-class=\"{paying:isPaying}\" class=\"iconfont icon-plus\" ng-click=\"buyHandler(\'plus\',$index);\"></i>\n        </div>\n      </div>\n    </div>\n    <div class=\"cartDetail-tip\">\n      <p class=\"cartDetail-tip-freight\" ng-if=\"ldcFreight.sub && ldcFreight.sub!=0\">29分钟达产品满{{ldcFreight.total|xiaomaiprice}}减{{ldcFreight.sub|xiaomaiprice}}</p>\n      <p class=\"cartDetail-tip-coupon\" ng-if=\"coupons.length\">{{coupons.length}}张可用优惠劵<i class=\"couponMore iconfont icon-YF_more\"></i>\n      </p>\n      <p class=\"cartDetail-tip-coupon\" ng-if=\"!coupons.length\">暂无可用优惠劵</p>\n    </div>\n  </div>\n</div>\n<!--遮罩-->\n<div class=\"mask\" mask-gui ng-click=\"closeMask();\"></div>\n\n\n<div class=\"goodDetail\" ng-class=\"{\'goodDetail-show\':showdetail}\" ng-controller=\"buy.detailCtrl\">\n  <div class=\"detailCont\">\n    <div class=\"goodIconWrap\">\n      <div class=\"iconfont icon-share\"></div>\n      <div class=\"iconfont icon-unfold\" ng-click=\"closeDetail();\"></div>\n    </div>\n    <div class=\"goodDetailWrap\">\n      <div class=\"imgCont\" ng-style=\"{\'background-image\':\'url(\'+good.imageUrl+\')\'}\">\n<!--到达类型-->\n        <label class=\"label\" ng-class=\"{\'ldc\':$index==0,\'rdc\':$index===1}\" ng-repeat=\"label in good.distributeTypeDisplay\" ng-show=\"label.length\">{{label}}</label>\n      </div>\n      <div class=\"good-normal-info\">\n<!--产品名称-->\n        <p class=\"title\">{{good.sourceType==2?good.activityGoodsName:good.bgGoodsName}}</p>\n<!--产品价格-->\n        <p class=\"priceCont\" ng-if=\"skuInfo\">\n          <span class=\"new-price\">&yen;<i>{{good.sourceType==2?skuInfo.activityPrice:good.minWapPrice|xiaomaiprice}}</i></span>\n          <span class=\"old-price\">&yen;{{skuInfo.originPrice|xiaomaiprice}}</span>\n        </p>\n        <p class=\"priceCont\" ng-if=\"!skuInfo\">\n          <span class=\"aggregate-price\">&yen;{{good.minWapPrice|xiaomaiprice}}</span>~\n          <span class=\"f14\">\n            &yen;{{good.maxWapPrice|xiaomaiprice}}\n          </span>\n        </p>\n<!--普通类活动-->\n        <div ng-if=\"good.isSeckill!=1\">\n<!--如果没有货 显示补货中-->\n          <p class=\"sold-out\" ng-if=\"good.goodsStatusDisplay==3\">补货中</p>\n<!--进行数量选择-->\n          <p class=\"buy-handler-cont \" ng-if=\"good.goodsStatusDisplay!=3\">\n            <span class=\"buy-handler iconfont icon-minus\" ng-class=\"{\'disabled\':!skuInfo}\" ng-click=\"buyHandler(\'minus\');\"></span>\n<!--当前已经购买的数量 -->\n            <span class=\"buy-result\">{{numInCart}}</span>\n            <span  ng-class=\"{paying:good.isPaying}\" class=\"buy-handler iconfont icon-plus buy-icon\" ng-class=\"{\'disabled\':!skuInfo}\" ng-click=\"buyHandler(\'plus\');\"></span>\n          </p>\n        </div>\n<!--秒杀类产品-->\n        <div ng-if=\"good.isSeckill==1\">\n<!--倒计时-->\n          <p class=\"countdown\" ng-if=\"good.killStarted==0\">\n            距开始\n            <span count-dead-call=\"timecountdown(timeid);\" countdown counttime=\"{{good.timeBeforeStart}}\" timeid=\"{{good.activityBgGoodsId}}\"></span>\n          </p>\n<!-- 活动已开始-->\n          <p class=\"countdown\" ng-if=\"good.killStarted==1\">\n            距结束\n            <span count-dead-call=\"timecountdown(timeid);\" countdown counttime=\"{{good.buyLeftTime}}\" timeid=\"{{good.activityBgGoodsId}}\"></span>\n          </p>\n<!-- 未开始-->\n          <p class=\"sk-icon disabled\" ng-if=\"good.killStarted==0\">抢</p>\n<!-- 已结束-->\n          <p class=\"sk-end\" ng-if=\"good.killStarted==2\">已结束</p>\n<!-- 已经售空-->\n          <p class=\"sold-out\" ng-if=\"good.killStarted==1 && good.goodsStatusDisplay==3\">已售空</p>\n<!-- 已经抢过了 -->\n          <p class=\"sold-geted\" ng-if=\"good.killStarted==1 && good.killed\">已抢购</p>\n<!-- 抢购开始 & 没抢购过 & 商品上架状态 -->\n          <p  ng-class=\"{paying:good.isPaying}\" class=\"sk-icon\" ng-click=\"buyHandler(\'plus\')\" ng-if=\"good.killStarted==1 && !good.killed && good.goodsStatusDisplay==2\">抢</p>\n        </div>\n      </div>\n<!--如果是聚合类产品-->\n      <div class=\"complex-properties\" ng-if=\"good.goodsType==3\">\n        <div class=\"complex-property\" ng-repeat=\"goodProperty in good.skuGoodsPropertyList\">\n          <p class=\"complex-property-name\">{{goodProperty.propertyName}}</p>\n          <div class=\"complex-property-values\">\n            <span ng-class=\"{checked:checkedProperties[goodProperty.propertyNameId]==valueItem.propertyValueId}\" ng-click=\"complexCheckProperty(goodProperty.propertyNameId,valueItem.propertyValueId)\" ng-repeat=\"valueItem in goodProperty.propertyValues\">{{valueItem.propertyValue}}</span>\n          </div>\n        </div>\n      </div>\n<!-- 产品描述-->\n      <div class=\"detail-desc\">\n        <div class=\"detail-desc-key\">产品描述:</div>\n        <div class=\"detail-desc-main\">{{good.goodsDesc}}</div>\n      </div>\n      <div class=\"detail-desc\">\n        <div class=\"detail-desc-key\">产品规格:</div>\n        <div class=\"detail-desc-main\">{{good.saleSpec}}/{{good.unit}}</div>\n      </div>\n      <div class=\"detail-desc\">\n        <div class=\"detail-desc-key\">产地:</div>\n        <div class=\"detail-desc-main\">{{good.originPlace}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("../assets/views/buy/detail.html","");
$templateCache.put("../assets/views/buy/shopcart.html","");
$templateCache.put("../assets/views/category/category.html","<div class=\"GoodsCont\">\n\n  <div class=\"errortip\" ng-if=\"haserror\">{{errorip}}</div>\n  <div  ng-if=\"isloading\" class=\"loading\">\n      loading....\n  </div>\n\n  <div class=\"GoodCont\" ng-repeat=\"good in goods\">\n    <div class=\"imgCont\" ng-click=\"gotoDetail(good);\" ng-style=\'{\"background-image\":\"url(\"+good.imageUrl+\")\"}\'></div>\n    <div class=\"details\">\n      <p class=\"goodname\" ng-click=\"gotoDetail(good);\">{{good.bgGoodsName}}</p>\n<!-- 输出标签29分钟达/次日达 -->\n      <label class=\"label\" ng-class=\"{\'ldc\':$index==0,\'rdc\':$index===1}\" ng-repeat=\"label in good.distributeTypeDisplay\" ng-show=\"label.length\">{{label}}</label>\n      <p class=\"priceCont\">\n<!-- 单品或者组合最高价-->\n        <span class=\"new-price\" ng-if=\"good.goodsType!=3\">\n          &yen;<i>{{good.skuList[0].wapPrice|xiaomaiprice}}</i>\n        </span>\n        <span class=\"old-price\" ng-if=\"good.goodsType!=3\">\n          &yen;{{good.skuList[0].originPrice|xiaomaiprice}}\n        </span>\n<!-- 聚合 -->\n        <span class=\"aggregate-price\" ng-if=\"good.goodsType==3\">\n          &yen;{{good.minWapPrice|xiaomaiprice}} ~ &yen;{{good.maxWapPrice|xiaomaiprice}}\n        </span>\n      </p>\n      <p ng-class=\"{paying:good.isPaying}\" ng-click=\"buyHandler(good,$index);\" class=\"buy-icon iconfont icon-plus\" ng-if=\"good.goodsStatusDisplay!=3\"></p>\n      <p class=\"sold-out\" ng-if=\"good.goodsStatusDisplay==3\">补货中</p>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("../assets/views/colleges/colleges.html","<div class=\"pub-header\">\n  <div back-icon class=\"iconfont icon-back\" ng-click=\"goback();\"></div>\n  <div class=\"location-info\">选择学校</div>\n  <div class=\"iconfont icon-locate-right\"></div>\n</div>\n<div class=\"colleges_content\" xiaomai-iscroll>\n  <ul class=\"countrylist\">\n    <li class=\"loading\" ng-if=\"isloading\">学校信息正在加载....</li>\n    <li class=\"errortip\" ng-if=\"haserror\">该城市还没有相关学校</li>\n    <li ng-repeat=\"country in countrylist\" >\n      <p class=\"countryname\">{{country.cityName}}</p>\n      <div ng-class=\"{holiday:college.isOpen!=1}\" class=\"\" ng-click=\"checkCollege(college)\" ng-click=\"checkCollege(college);\" ng-repeat=\"college in country.colleges\">{{college.collegeName}}</div>\n    </li>\n  </ul>\n</div>\n");
$templateCache.put("../assets/views/coupon/coupon.html","");
$templateCache.put("../assets/views/feedback/feedback.html","<div class=\"feedback-wrap\">\n  <div class=\"feedback-head\">\n    <div back-icon class=\"iconfont icon-back icon-left\" back-icon ng-click=\"goBack();\"></div>\n    <div class=\"icon-middle\">意见反馈</div>\n  </div>\n  <div class=\"feedback-main\">\n    <div class=\"textareaCont\">\n      <textarea class=\"feedback-cont\" ng-model=\"feedback\" placeholder=\"您的意见或建议是我们不断前进的巨大动力\"></textarea>\n    </div>\n    <input placeholder=\"请留下您的联系方式(可选)\" type=\"number\" ng-model=\"mobile\"/>\n    <div ng-click=\"submit();\" class=\"icon-right submitBtn\">提交</div>\n  </div>\n</div>\n");
$templateCache.put("../assets/views/locate/locate.html","<div class=\"pub-header\">\n  <div class=\"iconfont icon-back\" ng-click=\"goback();\"></div>\n  <div class=\"location-info\">选择学校</div>\n  <div class=\"iconfont icon-locate-right\"></div>\n</div>\n<div class=\"colleges_content\" xiaomai-iscroll>\n  <div class=\"\">\n    <p class=\"title\">定位学校</p>\n    <div class=\"localColleges\" ng-class=\"{locating:isLocating}\">\n      <p class=\"\" ng-if=\"isloading\"></p>\n      <p class=\"errortip\" ng-if=\"haserror\">小麦迷路了,手动选择一下吧</p>\n      <p class=\"locateCollege\" ng-class=\"{holiday:item.isOpen!=1}\" ng-click=\"checkCollege(item)\" ng-repeat=\"item in locationResult\">{{item.collegeName}}</p>\n    </div>\n    <p class=\"title\">手动选择</p>\n    <div class=\"allSchools\">\n      <ul class=\"citylist iconfont\">\n        <li ng-class=\"{checked:item.cityId==curcityid}\" ng-click=\"showCollegeList(item);\" ng-repeat=\"item in citylist\">{{item.cityName}}</li>\n      </ul>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("../assets/views/nav/nav.html","<div class=\"pub-header\" ng-controller=\"nav.headCtrl\">\n\n  <div class=\"iconfont icon-feedback\" ng-click=\"gotoFeedback();\"></div>\n  <div class=\"location-info\" ng-click=\"gotoLocate();\">\n    <i class=\"locate iconfont\"></i>\n    {{schoolname}}\n    <i class=\"changeLocate\"></i>\n  </div>\n  <div class=\"iconfont icon-user\"></div>\n\n</div>\n<div class=\"list-main main-both\" >\n  <div class=\"list-category\" xiaomai-iscroll>\n    <ul ng-controller=\"nav.listCtrl\">\n      <li ng-repeat=\"nav in navs\" ng-class=\"{\'nav-checked\':navChecked(nav)}\" class=\"nav  nav-super nav-mark-{{nav.labelType}}\" ng-click=\"goto(nav);\" ng-if=\"nav.displayType!=3\">{{nav.navigateName}}</li>\n     <li  class=\"nav nav-super \" ng-init=\"isShowSub=true;\">\n        <p class=\"arrow-down\" ng-class=\"{\'arrow-up\':!isShowSub}\" ng-click=\"isShowSub=!isShowSub;\">聚类导航</p>\n        <ul ng-show=\"isShowSub\">\n          <li ng-click=\"goto(subnav);\" class=\"nav-sub nav-mark-{{subnav.labelType}}\" ng-class=\"{\'nav-checked\':subnav.categoryId==curcategoryId}\" ng-if=\"subnav.displayType==3\" class=\"nav-sub\" ng-repeat=\"subnav in navs\">{{subnav.navigateName}}</li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n  <div class=\"list-product\" up-tip-cls=\"{{\'navmain-downtip\'}}\" down-tip-cls=\"{{\'navmain-uptip\'}}\" xiaomai-iscroll subname=\"{{\'navmainheightstatus\'}}\" pubname=\"{{\'navmainscrollupdate\'}}\">\n      <div ui-view></div>\n  </div>\n</div>\n");
$templateCache.put("../assets/views/notfound/notfound.html","");
$templateCache.put("../assets/views/recommend/recommend.html","<div class=\"recommendCategoryCont\">\n  <div class=\"errortip\" ng-if=\"haserror\">\n      错误提示....\n  </div>\n  <div  ng-if=\"isloading\" class=\"loading\">\n     loading...\n  </div>\n  <div class=\"\" ng-repeat=\"item in categorys\">\n    <div class=\"recommendCateTitle\">\n      <h3>{{item.category.categoryName}}</h3>\n      <span class=\"iconfont icon-unfold\" ng-click=\"gotocategory(item);\"></span>\n    </div>\n    <div class=\"recommendCateColumn\">\n      <div class=\"recommendCateGood\" ng-repeat=\"good in item.goods\">\n        <div class=\"imgCont\" ng-click=\"gotoDetail(good);\" ng-style=\'{\"background-image\":\"url(\"+good.imageUrl+\")\"}\'></div>\n        <div class=\"details\">\n          <p class=\"goodname\" ng-click=\"gotoDetail(good);\">{{good.bgGoodsName}}</p>\n<!-- 输出标签29分钟达/次日达 -->\n          <label class=\"label\" ng-class=\"{\'ldc\':$index==0,\'rdc\':$index===1}\" ng-repeat=\"label in good.distributeTypeDisplay\" ng-show=\"label.length\">{{label}}</label>\n          <p class=\"priceCont\">\n<!-- 单品或者组合最高价-->\n            <span class=\"new-price\" ng-if=\"good.goodsType==1||good.goodsType==2\">\n              &yen;<i>{{good.skuList[0].wapPrice|xiaomaiprice}}</i>\n            </span>\n            <span class=\"old-price\" ng-if=\"good.goodsType==1||good.goodsType==2\">\n              &yen;{{good.skuList[0].originPrice|xiaomaiprice}}</span>\n              <!-- 聚合 -->\n            <span class=\"aggregate-price\" ng-if=\"good.goodsType==3 && good.skuList[0].minWapPrice!=good.skuList[0].maxWapPrice\">\n              &yen;{{good.skuList[0].minWapPrice|xiaomaiprice}} ~ &yen;{{good.skuList[0].maxWapPrice|xiaomaiprice}}\n            </span>\n          </p>\n          <p  ng-class=\"{paying:good.isPaying}\" ng-click=\"buyHandler(good ,$index,$parent.$parent.$index);\" class=\"buy-icon iconfont icon-plus\" ng-if=\"good.goodsStatusDisplay!=3\"></p>\n          <p class=\"sold-out\" ng-if=\"good.goodsStatusDisplay==3\">补货中</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("../assets/views/root/root.html","<div ui-view></div>\n");
$templateCache.put("../assets/views/skactive/skactive.html","<div class=\"pub-header\">\n  <div back-icon class=\"iconfont icon-back\" ng-click=\"goback();\"></div>\n  <div class=\"location-info\">{{activityShowName}}</div>\n  <div class=\"iconfont icon-locate-right\"></div>\n</div>\n<div class=\"skWrap\" down-tip-cls=\"{{\'skactive-downtip\'}}\" pubname=\"{{\'skactiveiscrollupdate\'}}\" subname=\"{{\'skactiveheightstatus\'}}\" xiaomai-iscroll>\n  <div>\n    <div class=\"banner\">\n      <ks-swiper-container swiper=\"swiper\">\n        <ks-swiper-slide class=\"swiper-slide\" ng-repeat=\"banner in banners\">\n          <div class=\"skactiveGoodBanner\" ng-click=\"gotoActive(banner);\" ng-style=\"{\'background-image\':\'url(\'+banner.imageUrl+\')\'}\"></div>\n        </ks-swiper-slide>\n      </ks-swiper-container>\n    </div>\n    <ul class=\"skactiveGoodList\">\n      <li class=\"errortip\" ng-click=\"goHomepage();\" ng-if=\"haserror\">\n        活动已经结束 去其他活动<span>看看吧</span>\n      </li>\n      <li class=\"loading\" ng-if=\"isloading\">\n        loading....\n      </li>\n      <li ng-repeat=\"good in goods\">\n        <div class=\"goodItem\">\n          <div class=\"imgCont\" ng-click=\"gotoDetail(good);\" ng-style=\'{\"background-image\":\"url(\"+good.imageUrl+\")\"}\'>\n<!--如果活动未开始-->\n            <p class=\"countdown\" ng-if=\"good.killStarted==0\">\n              距开始\n              <span count-dead-call=\"timecountdown(timeid);\" countdown counttime=\"{{good.timeBeforeStart}}\" timeid=\"{{good.activityBgGoodsId}}\"></span>\n            </p>\n<!-- 活动已开始-->\n            <p class=\"countdown\" ng-if=\"good.killStarted==1\">\n              距结束\n              <span count-dead-call=\"timecountdown(timeid);\" countdown counttime=\"{{good.buyLeftTime}}\" timeid=\"{{good.activityBgGoodsId}}\"></span>\n            </p>\n          </div>\n          <div class=\"details\">\n            <p class=\"goodname\" ng-click=\"gotoDetail(good);\">{{good.activityGoodsName}}</p>\n<!-- 输出标签29分钟达/次日达 -->\n            <label class=\"label\" ng-class=\"{\'ldc\':$index==0,\'rdc\':$index===1}\" ng-repeat=\"label in good.distributeTypeDisplay\" ng-show=\"label.length\">{{label}}</label>\n            <p class=\"priceCont\">\n<!-- 单品或者组合最高价-->\n              <span class=\"new-price\" ng-if=\"good.goodsType==1||good.goodsType==2\">\n                &yen;<i>{{good.skuList[0].activityPrice|xiaomaiprice}}</i>\n              </span>\n              <span class=\"old-price\" ng-if=\"good.goodsType==1||good.goodsType==2\">\n                &yen;{{good.skuList[0].originPrice|xiaomaiprice}}</span>\n            </p>\n<!-- 未开始-->\n            <p class=\"sk-icon disabled\" ng-if=\"good.killStarted==0\">抢</p>\n<!-- 已结束-->\n            <p class=\"sk-end\" ng-if=\"good.killStarted==2\">已结束</p>\n<!-- 已经售空-->\n            <p class=\"sold-out\" ng-if=\"good.killStarted==1 && good.goodsStatusDisplay==3\">已售空</p>\n<!-- 已经抢过了 -->\n            <p class=\"sold-geted\" ng-if=\"good.killStarted==1 && good.killed\">已抢购</p>\n<!-- 抢购开始 & 没抢购过 & 商品上架状态 -->\n            <p class=\"sk-icon\" ng-class=\"{paying:good.isPaying}\" ng-click=\"\" ng-click=\"buyHandler(good,$index);\" ng-if=\"good.killStarted==1 && !good.killed && good.goodsStatusDisplay==2\">抢</p>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n");}]);