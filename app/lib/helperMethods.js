import _ from 'lodash'
import { I18nManager } from "react-native";

export const wishlistDetailsMapper = (data) => {
    return _.map(data, item => {

        return {
          CUID: I18nManager.isRTL ?
            _.get(item, ["customer_id"], '') :
            _.get(item, ["customer_id"], ''),

             DATE: I18nManager.isRTL ?
             _.get(item, ["created_at"], '') :
             _.get(item, ["created_at"], ''),

             SLUG: I18nManager.isRTL ?
             _.get(item, ["products",'slug'], '') :
             _.get(item, ["products",'slug'], ''),

             COVER: I18nManager.isRTL ?
             _.get(item, ["products",'cover_image'], '') :
             _.get(item, ["products",'cover_image'], ''),

             PRICE: I18nManager.isRTL ?
             _.get(item, ["products",'price'], '') :
             _.get(item, ["products",'price'], ''),



            // product_type: I18nManager.isRTL ?
            // _.get(item, ['data','products','product_type'], '') :
            // _.get(item, ['data','products','product_type'], ''),

            // image: I18nManager.isRTL ?
            // _.get(item, ['lang', 'ar', 'image'], '') :
            // _.get(item, ['lang', 'en', 'image'], ''),
            //discount_price: _.get(item, ['items', 'discount_price'], 0),

}
    })
} 

export const howtouseDetailsMapper = (data) => {
    const lang = I18nManager.isRTL ? "ar" : "en";
    const finalData = data.filter(function(item) {
      if (_.get(item, ["lang", lang, "content"], null) == null) {
          return false;
        }
      return true;
    }).map(function(item) {
      return {
          title: I18nManager.isRTL
            ? _.get(item, ["lang", "ar", "title"], "")
            : _.get(item, ["lang", "en", "title"], ""),
    
          text: I18nManager.isRTL
            ? _.get(item, ["lang", "ar", "content"], "")
            : _.get(item, ["lang", "en", "content"], ""),
    
          image: I18nManager.isRTL
            ? _.get(item, ["lang", "ar", "image"], "")
            : _.get(item, ["lang", "en", "image"], ""),
        };
     });
  
     return finalData;
  };

  // export const wishlistDetailsMapper = (data) => {
  //   const lang = I18nManager.isRTL ? "ar" : "en";
  //   const finalData = data.filter(function(item) {
  //     if (_.get(item, ["lang", lang, "content"], null) == null) {
  //         return false;
  //       }
  //     return true;
  //   }).map(function(item) {
  //     return {
  //         title: I18nManager.isRTL
  //           ? _.get(item, ["lang", "ar", "slug"], "")
  //           : _.get(item, ["lang", "en", "slug"], ""),
    
  //         text: I18nManager.isRTL
  //           ? _.get(item, ["lang", "ar", "product_type"], "")
  //           : _.get(item, ["lang", "en", "product_type"], ""),
    
  //         image: I18nManager.isRTL
  //           ? _.get(item, ["lang", "ar", "cover_image"], "")
  //           : _.get(item, ["lang", "en", "cover_image"], ""),
  //       };
  //    });
  
  //    return finalData;
  // };