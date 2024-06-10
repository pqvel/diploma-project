"use server";
import { FC } from "react";
import MainLayout from "@/components/layouts/MainLayout";

const MainPage: FC = async () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-300 rounded-lg p-6 text-center">
          <p className="text-lg text-gray-700">
            Занимайтесь на нашей платформе
          </p>
        </div>
        <div className="bg-white border border-gray-300 rounded-lg p-6 text-center">
          <p className="text-lg text-gray-700">
            Развивайте практические навыки
          </p>
        </div>
        <div className="bg-white border border-gray-300 rounded-lg p-6 text-center">
          <p className="text-lg text-gray-700">
            Практикуйте и совершенствуйтесь
          </p>
        </div>
        <div className="bg-white border border-gray-300 rounded-lg p-6 text-center">
          <p className="text-lg text-gray-700">
            Исследуйте новые возможности с нами
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default MainPage;
