import React from 'react';
import Button from '@components/frontStore/cms/Button';

export default function FeaturedCategories() {
  return (
    <div className="mt-15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
        <div>
          <div className="text-center">
            <img src="/assets/homepage/banner/men-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4  mt-1 mb-1">Fıstık Ezmesi Çesitleri</h3>
          <div className="mb-1">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Button url="/category" title="Fıstık Ezmesi" variant="primary" />
        </div>
        <div>
          <div>
            <img src="/assets/homepage/banner/women-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4  mt-1 mb-1">Fındık Ezmesi Çesitleri</h3>
          <div className="mb-1">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Button url="/category" title="Fındık Ezmesi" variant="primary" />
        </div>
        <div>
          <div>
            <img src="/assets/homepage/banner/kid-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 mt-1 mb-1">Diğer Çeşitler</h3>
          <div className="mb-1">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Button url="/category" title="Tahin" variant="primary" />
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
