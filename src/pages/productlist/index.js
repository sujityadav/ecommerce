import { Link } from "react-router-dom";

import React, { useState } from "react";
import TopNav from "../../components/layout/topnav.component";
import MegaMenu from "../../components/layout/megamenu.component";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Checkbox } from "primereact/checkbox";




export default function AllProducts() {
  const categories = [
    { name: 'Mens Shirts', key: 'A' },
    { name: 'Mens T Shirts', key: 'M' },
    { name: 'Top and Bottom Fabric', key: 'P' },
    { name: 'Shirts', key: 'S' },
    { name: 'Jenas', key: 'J' },
    { name: 'Shirts', key: 'SH' },
    { name: 'Jakects', key: 'JA' },
    { name: 'Shirts', key: 'SHY' },
    { name: 'Vests', key: 'V' }
];
const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked)
        _selectedCategories.push(e.value);
    else
        _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

    setSelectedCategories(_selectedCategories);
};


  return (
    <>
      <TopNav />

      <div className=" px-[20px]  xl:px-[8.208vw] 3xl:px-[10.417vw]">
        {/* <MegaMenu/> */}

        <div className=" mt-[40px]">
          <h2 className="font-semibold text-xl">All Products</h2>
          <p className="font-normal text-[#545454]">Showing 41-60 out of 10000 products</p>

        </div>
        <div className="mt-[30px]">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <div className="border rounded-md bg-[#fff] p-3">
                <h3>FILTERS</h3>
                <div className="custom-accordion mt-[20px]">
                  <Accordion multiple activeIndex={[0]}>
                    <AccordionTab header="Category">
                     <div>
                     {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center mb-2">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                            <label htmlFor={category.key} className="ml-2 text-sm">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
                     </div>
                    </AccordionTab>
                    <AccordionTab header="Gender">
                      <div className="flex gap-2">
                      <a to="" className=" py-1 px-2 text-center text-[#545454] border rounded-full hover:bg-[#0585d5]  hover:text-white">Mens</a>
                      <a to="" className="py-1 px-2 text-center text-[#545454] border rounded-full hover:bg-[#0585d5]  hover:text-white">Womens</a>
                      </div>
                    </AccordionTab>
                    <AccordionTab header="Size">
                      <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="Price">
                      <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="Rating">
                      <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="Discount">
                      <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                      </p>
                    </AccordionTab>
                  </Accordion>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}