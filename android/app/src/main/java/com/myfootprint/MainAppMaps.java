package com.myfootprint;

import com.facebook.react.ReactActivity;
import com.oblador.vectoricons.VectorIconsPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;
import com.airbnb.android.react.maps.MapsPackage;

public class MyApplication extends Application implements ReactApplication {
  private final ReactNativeHost reactNativeHost = new ReactNativeHost(this) {
    @Override protected List<ReactPackage> getPackages() {
      return Arrays.asList(
          new MainReactPackage(),
          new MapsPackage());
    }
  };

  @Override public ReactNativeHost getReactNativeHost() {
    return reactNativeHost;
  }
}