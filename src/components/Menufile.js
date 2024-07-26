// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
import { MenuInfo } from "./Menuinfofile";
import { useMenu } from "../hooks/useMenu";
// import { useState } from "react";

export const Menu = () => {
  // const [menuList, setMenuList] = useState([]);
  // const [menuItem, setMenuItem] = useState([]);
  // const [loading, setLoading] = true;
  // const [offers, setOffers] = useState([]);

  // const { id } = useParams();
  // console.log(id);

  // useEffect(() => {
  //   const menu = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
  //       );
  //       const data = await response.json();
  //       // console.log(data);
  //       setMenuItem(data?.data?.cards[2]?.card?.card || {});
  //       setMenuList(data);
  //       // setLoading(false);
  //       // setOffers(
  //       //   data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
  //       // );
  //     } catch {
  //       console.log("error");
  //       // setLoading(false);
  //     }
  //   };
  //   menu();
  // }, [id]);

  // console.log(menuList);
  // console.log(menuItem);
  // console.log(menuList?.data);

  const menuObject = useMenu();
  // console.log(menuObject?.menuItem);

  return (
    <>
      {/* {console.log(MenuList?.cards[2]?.card?.card?.info?.id)} */}
      <div className="d-flex justify-content-center">
        <div className=" p-0 menuInfoWidth" style={{ width: "52%" }}>
          {menuObject?.menuLoading ? (
            <>
              <div className="container " style={{ height: "100vh" }}>
                <div className="shimmerLine mx-auto w-75"></div>
                <div>
                  <div
                    className="shimmerLine  m-5 mb-1"
                    style={{ width: "13%" }}
                  ></div>
                  <div className=" d-flex py-1 flex-wrap">
                    {new Array(2).fill(0).map(() => (
                      <div
                        className="custom-card col-6"
                        style={{ padding: "45px 25px 20px 46px" }}
                      >
                        <div className="mb-3 ">
                          <div className="shimmerImg "></div>
                        </div>
                        <div className="">
                          <div className="shimmerLine w-50 mb-2"></div>
                          <div className="shimmerLine w-25 mb-2"></div>
                          <div
                            className="shimmerLine  mb-2"
                            style={{ width: "13%" }}
                          ></div>
                          <div className="d-flex justify-content-end">
                            <div
                              className=" shimmerLine"
                              style={{ width: "17%", height: "25px" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            menuObject?.menuItem?.info?.id && (
              <MenuInfo
                key={menuObject?.menuItem?.info?.id}
                menuItem={menuObject?.menuItem}
                offers={menuObject?.offers}
                setOffers={menuObject?.setOffers}
                menuDatas={menuObject?.menuDatas}
                setMenuDatas={menuObject?.setMenuDatas}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};
