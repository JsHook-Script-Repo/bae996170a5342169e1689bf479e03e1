var packageName = common.getlpparam().packageName;

if (packageName == 'com.flyersoft.moonreader'){
common.toast('cracked by hzy\npowered by jshook\n')
common.dialog('脚本仅供学习交流使用，切勿用于商业用途')
common.hookAllMethods('com.flyersoft.books.A','isPro',function (param) {
      param.setResult(java.lang.Boolean.valueOf('true'));
},null);
common.hookAllMethods('com.flyersoft.components.MrAd','disableAds',function (param) {
      param.setResult(java.lang.Boolean.valueOf('true'));
},null);
// common.hookAllMethods('com.flyersoft.moonreader.ActivityMain','showAdFreeOptions',null,null,function (param) {
//       common.log(common.thisMethod(param));
// })
// common.setStaticObjectField('android.view.View', 'removeAdButton', java.lang.Integer.valueOf('0'));
// common.getStaticObjectField('com.flyersoft.moonreader.R.id', 'removeAdButton', java.lang.Integer.valueOf('0'));
}
