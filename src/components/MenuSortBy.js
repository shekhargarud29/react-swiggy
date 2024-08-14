export const MenuSortBy = ({ menuDatas, setMenuDatas, cloneMenuDatas }) => {
  // console.log(menuDatas);
  // console.log(cloneMenuDatas);
  const menuSortBy = (id) => {
    const filterData = cloneMenuDatas.map((menuData, index) => {
      const { carousel, categories, itemCards } = menuData?.card?.card;

      let newItemCards = itemCards;
      let newCategories = categories;
      let newCarousel = carousel;
      if (itemCards) {
        newItemCards = itemCards.filter((itemCard) => {
          return id === "VEG"
            ? itemCard?.card?.info?.isVeg
            : !itemCard?.card?.info?.isVeg;
        });

        // console.log(newItemCards);
      }
      if (categories) {
        newCategories = categories
          ?.slice()
          .map((categoryData) => {
            const filerCatergoryData = categoryData?.itemCards.filter(
              (itemCard, index) => {
                return id === "VEG"
                  ? itemCard?.card?.info?.isVeg
                  : !itemCard?.card?.info?.isVeg;
              }
            );
            // console.log(filerCatergoryData);
            return {
              ...categoryData,
              itemCards: filerCatergoryData,
            };
          })
          .filter((categoryData) =>
            id === "VEG"
              ? !categoryData?.title.toLowerCase().includes("non")
              : categoryData?.title.toLowerCase().includes("non")
          );
      }
      if (carousel) {
        newCarousel = carousel.filter((topPick) => {
          return id === "VEG"
            ? topPick?.dish?.info?.isVeg
            : !topPick?.dish?.info?.isVeg;
        });
      }
      return {
        ...menuData,
        card: {
          ...menuData.card,
          card: {
            ...menuData.card.card,
            ...(itemCards && {
              itemCards: newItemCards.length > 0 ? newItemCards : null,
            }),
            ...(categories && {
              categories: newCategories.length > 0 ? newCategories : null,
            }),
            ...(carousel && {
              carousel: newCarousel.length > 0 ? newCarousel : null,
            }),
          },
        },
      };
    });

    setMenuDatas(filterData);

    // console.log(filterData);

    // if (id === "NONVEG") {
    //   const filterData = cloneMenuDatas.map((menuData, index) => {
    //     const { carousel, categories, itemCards } = menuData?.card?.card;

    //     let newItemCards = itemCards;
    //     let newCategories = categories;
    //     let newCarousel = carousel;
    //     if (itemCards) {
    //       newItemCards = itemCards.slice().filter((itemCard) => {
    //         return itemCard?.card?.info?.isVeg === false;
    //       });
    //     }
    //     if (categories) {
    //       newCategories = categories?.slice().filter((categoryData) => {
    //         if (categoryData?.title.toLowerCase().includes("non")) {
    //           const filerCatergoryData = categoryData?.itemCards
    //             .slice()
    //             .filter((itemCard, index) => {
    //               return itemCard?.card?.info?.isVeg === false;
    //             });
    //           return {
    //             ...categoryData,
    //             itemCards: filerCatergoryData,
    //           };
    //         }
    //       });
    //     }
    //     if (carousel) {
    //       newCarousel = carousel.slice().filter((topPick) => {
    //         return topPick?.dish?.info?.isVeg === false;
    //       });
    //     }
    //     return {
    //       ...menuData,
    //       card: {
    //         ...menuData.card,
    //         card: {
    //           ...menuData.card.card,
    //           ...(itemCards && { itemCards: newItemCards }),
    //           ...(categories && { categories: newCategories }),
    //           ...(carousel && { carousel: newCarousel }),
    //         },
    //       },
    //     };
    //   });

    //   setMenuDatas(filterData);

    //   console.log(filterData);
    // }
  };
  return (
    <>
      <div className="d-flex  pb-3">
        <div
          className="border  me-2"
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "25px",
            position: "relative",
            padding: "10px 16px",
            height: "35px",
            width: "70px",
          }}
        >
          <input
            type="checkbox"
            id="VEG"
            className=""
            name="food"
            style={{
              boxShadow: "0 15px 40px -20px rgba(40, 44, 63, .15)",
              cursor: "pointer",
            }}
            onChange={(e) => {
              // console.log(e.target.id);
              if (e.target.checked) {
                menuSortBy(e.target.id);
                document.getElementById("NONVEG").checked = false;
              } else setMenuDatas(cloneMenuDatas);
            }}
          />

          <div
            id="VEGDIV"
            className="border  border-success   rounded-1"
            style={{
              backgroundColor: "white",
              width: "max-content",
              padding: "2.50px",
            }}
            onClick={(e) => {
              !document.getElementById("VEG").checked
                ? (document.getElementById("VEG").checked = true)
                : (document.getElementById("VEG").checked = false);
              if (document.getElementById("VEG").checked) {
                menuSortBy("VEG");
                document.getElementById("NONVEG").checked = false;
              } else setMenuDatas(cloneMenuDatas);
            }}
          >
            <div
              className=""
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                backgroundColor: "#0f8a65",
              }}
            ></div>
          </div>
        </div>
        <div
          className="border  mx-2"
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "25px",
            position: "relative",
            padding: "10px 16px",
            height: "35px",
            width: "70px",
          }}
        >
          <input
            type="checkbox"
            id="NONVEG"
            className=""
            name="food"
            style={{
              boxShadow: "0 15px 40px -20px rgba(40, 44, 63, .15)",
              cursor: "pointer",
            }}
            onChange={(e) => {
              if (e.target.checked) {
                menuSortBy(e.target.id);
                document.getElementById("VEG").checked = false;
              } else setMenuDatas(cloneMenuDatas);
            }}
          />
          <div
            id="NONVEGDIV"
            className="border  border-danger  rounded-1"
            style={{
              width: "max-content",
              padding: "1.50px",
              backgroundColor: "white",
            }}
            onClick={() => {
              !document.getElementById("NONVEG").checked
                ? (document.getElementById("NONVEG").checked = true)
                : (document.getElementById("NONVEG").checked = false);
              if (document.getElementById("NONVEG").checked) {
                menuSortBy("NONVEG");
                document.getElementById("VEG").checked = false;
              } else setMenuDatas(cloneMenuDatas);
            }}
          >
            <div
              className=""
              style={{
                width: "0px",
                height: "0px",
                borderRadius: "3px",
                borderLeft: "7px solid transparent",
                borderRight: "7px solid transparent",
                borderBottom: "10px solid #e43b4f",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
