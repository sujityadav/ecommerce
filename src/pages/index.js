import { Link } from "react-router-dom";
import Banner from "../components/banner";
import Layout from "../components/layout/layout";
import TopNav from "../components/layout/topnav.component";
import FeaturedProductCard from "../components/FeaturedProductsList";
import ExploreBrandSilder from "../components/ExploreBrandSilder";
import Footer from "../components/layout/footer.component";




export default function HomePage() {

  const FeaturedProducts = [
    {
      id: 1,
      title: "Best of QLED TVs",
      discount: "60% Off",
      priceInfo: "₹7,000 Off on Exch*",
      imgUrl: "https://picsum.photos/600/400/?random",
    },
    {
      id: 2,
      title: "Top Smart LED TVs",
      discount: "30% Off",
      priceInfo: "₹3,000 Off on Exch*",
      imgUrl: "https://picsum.photos/600/400/?random",
    },
    {
      id: 3,
      title: "4K Ultra HD TVs",
      discount: "25% Off",
      priceInfo: "₹5,000 Off on Exch*",
      imgUrl: "https://picsum.photos/600/400/?random",
    },
    {
      id: 4,
      title: "OLED TVs Collection",
      discount: "40% Off",
      priceInfo: "₹8,000 Off on Exch*",
      imgUrl: "https://picsum.photos/600/400/?random",
    },
    {
      id: 5,
      title: "OLED TVs Collection",
      discount: "40% Off",
      priceInfo: "₹8,000 Off on Exch*",
      imgUrl: "https://picsum.photos/600/400/?random",
    },
    // Add more products as needed
  ];
   const FeaturedProductsList = () => (
    <>
      {FeaturedProducts.slice(0, 4).map(FeaturedProducts => (
        <FeaturedProductCard key={FeaturedProducts.id} product={FeaturedProducts} />
      ))}
    </>
  );
 
  return (
    <div className="mb-[px]">
      <TopNav />
      <div className=" px-[20px]  xl:px-[10.208vw] 3xl:px-[10.417vw]">
        <Banner />
        <section className="pt-[50px] pb-[30px]">
          <div className="p-[20px] bg-white rounded-sm">
            <div className="px-[120px]">
              <div className="grid grid-cols-6 md:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-[1.823vw]">
                <div className="text-center">
                  <img src={require('../assets/images/discount.gif')} width={60} className="m-auto" />

                  <h3 className="text-[#545454] font-medium text-[16px] mt-[10px]">
                    Top Offers
                  </h3>
                </div>
                <div className="text-center">
                  <img src={require('../assets/images/responsive.gif')} width={60} className="m-auto" />

                  <h3 className="text-[#545454] font-medium text-[16px] mt-[10px]">
                    Mobiles and Tablets
                  </h3>
                </div>
                <div className="text-center">
                  <img src={require('../assets/images/oven.gif')} width={60} className="m-auto" />

                  <h3 className="text-[#545454] font-medium text-[16px] mt-[10px]">
                    Electronic Appliances
                  </h3>
                </div>
                <div className="text-center">
                  <img src={require('../assets/images/dress.gif')} width={60} className="m-auto" />

                  <h3 className="text-[#545454] font-medium text-[16px] mt-[10px]">
                    Fashion
                  </h3>
                </div>
                <div className="text-center">
                  <img src={require('../assets/images/kitchen-tools.gif')} width={60} className="m-auto" />

                  <h3 className="text-[#545454] font-medium text-[16px] mt-[10px]">
                    Home and Kitchen
                  </h3>
                </div>
                <div className="text-center">
                  <img src={require('../assets/images/table.gif')} width={60} className="m-auto" />

                  <h3 className="text-[#545454] font-medium text-[16px] mt-[10px]">
                    Furniture
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[20px]">
          <div className="grid grid-cols-12 gap-[10px]">
            <div className="col-span-2">
              <img src={require('../assets/images/ad1.png')} className="h-[395px] w-full" />
            </div>
            <div className="col-span-10">
              <div className="bg-white rounded-md p-[20px]">
                <div className="flex justify-between">
                  <h4 className="font-semibold">Featured Products</h4>
                  <Link href='' className="text-[#0585d5] text-[14px]">View All</Link>
                </div>
                <div class="grid grid-cols-4 gap-[20px] mt-[20px]">
                  <FeaturedProductsList />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-[20px]">
          <div className="bg-white rounded-md p-[20px]">
            <div className="flex w-full justify-between">
              <h4 className="font-semibold">Explore Brands</h4>
              <Link href='' className="text-[#0585d5] text-[14px]">View All</Link>
            </div>
            <div className=" mt-[20px]">
               <ExploreBrandSilder/>

            </div>
          </div>
        </section>
        <section className="py-[20px]">
        <div className="grid grid-cols-12 gap-[10px]">
          <div className="col-span-4">
          <div className="bg-white rounded-md p-[20px]">
            <div className="flex w-full justify-between">
              <h4 className="font-semibold">Best Offers Best Discount</h4>
              <Link href='' className="text-[#0585d5] text-[14px]">View All</Link>
            </div>
            <div className=" mt-[20px]">
            <div className="grid grid-cols-2 gap-[20px]">
              <div className="border p-[10px] rounded-lg">
                <img src={require('../assets/images/offer1.png')} className="h-[215px] w-full object-fit" />
                <div className="mt-[10px]">
                <h3 className="text-[#333] font-medium text-[16px] mt-[10px] leading-tight">
                    Smart Watches
                  </h3>
                  <p className="text-green-700 font-medium text-[16px] mt-[10px] leading-none">
                    50% Off
                  </p>
                </div>
              </div>
              <div className="border p-[10px] rounded-lg">
                <img src={require('../assets/images/offer2.png')} className="h-[215px] w-full object-fit" />
                <div className="mt-[10px]">
                <h3 className="text-[#333] font-medium text-[16px] mt-[10px] leading-tight">
                   Men's Tracksuit
                  </h3>
                  <p className="text-green-700 font-medium text-[16px] mt-[10px] leading-none">
                  Min. 60% Off
                  </p>
                </div>
              </div>
              <div className="border p-[10px] rounded-lg">
                <img src={require('../assets/images/offer3.png')} className="h-[215px] w-full object-fit" />
                <div className="mt-[10px]">
                <h3 className="text-[#333] font-medium text-[16px] mt-[10px] leading-tight">
                    Travel Bags
                  </h3>
                  <p className="text-green-700 font-medium text-[16px] mt-[10px] leading-none">
                    50% Off
                  </p>
                </div>
              </div>
              <div className="border p-[10px] rounded-lg">
                <img src={require('../assets/images/offer4.png')} className="h-[215px] w-full object-fit" />
                <div className="mt-[10px]">
                <h3 className="text-[#333] font-medium text-[16px] mt-[10px] leading-tight">
                   Wallpaper
                  </h3>
                  <p className="text-green-700 font-medium text-[16px] mt-[10px] leading-none">
                    Special Offers
                  </p>
                </div>
              </div>

              </div>

            </div>
            </div>
          </div>

          <div className="col-span-8">
            <div className="h-full bg-[#a8caec] rounded-md">
            <img src={require('../assets/images/ad2.png')} className="h-auto w-full object-fit" />
            </div>
          </div>
          </div>
        </section>
      
      </div>
      <Footer/>
    </div>
  );
}