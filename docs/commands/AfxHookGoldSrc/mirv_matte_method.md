<tt>mirv_matte_method _**1**|2_</tt>

* **Default:** 1

# mirv_matte_method 1

Normal, use keying (see [[mirv_matte_setcolor|GoldSrc:mirv_matte_setcolor]] and [[GoldSrc:Matte Effects]]).

stream images:

world | entity
--- | ---
[<img alt="world stream" src="https://user-images.githubusercontent.com/3610128/63041570-778d5b00-bec8-11e9-8180-98384856cd28.jpg" width="300" height="169">](https://user-images.githubusercontent.com/3610128/63041570-778d5b00-bec8-11e9-8180-98384856cd28.jpg) | [<img alt="entity stream" src="https://user-images.githubusercontent.com/3610128/63041567-76f4c480-bec8-11e9-8bfd-335e98fd1435.jpg" width="300" height="169">](https://user-images.githubusercontent.com/3610128/63041567-76f4c480-bec8-11e9-8bfd-335e98fd1435.jpg)


# mirv_matte_method 2

Special / visibility matte / alpha matte.

stream images:

world | entity
--- | ---
[<img alt="world stream" src="https://user-images.githubusercontent.com/3610128/63042618-b6241500-beca-11e9-8604-2387942aea2d.jpg" width="300" height="169">](https://user-images.githubusercontent.com/3610128/63042618-b6241500-beca-11e9-8604-2387942aea2d.jpg) | [<img alt="entity stream" src="https://user-images.githubusercontent.com/3610128/63042575-9bea3700-beca-11e9-8a75-3b1b6be9829b.jpg" width="300" height="169">](https://user-images.githubusercontent.com/3610128/63042575-9bea3700-beca-11e9-8a75-3b1b6be9829b.jpg)


This mode is superior to keying in when it comes transparency and anti-aliasing.

The behavior from <tt>mirv_matte_method 1</tt> (see above) is altered as follows:

* World stream: Contains the full image now.
* Entity stream:
  * Everything that would have been drawn in the entity stream is drawn white
  * Everything that would have been masked is drawn black
  * Everything that would be hidden is hidden ([[mirv_matte_xray|GoldSrc:mirv_matte_xray]])

Leave [[mirv_matte_setcolor|GoldSrc:mirv_matte_setcolor]] and [[mirv_matte_setcolorf|GoldSrc:mirv_matte_setcolorf]] default (black).

# See also

* [[GoldSrc:Matte Effects]]
* [[GoldSrc:Commands]]
