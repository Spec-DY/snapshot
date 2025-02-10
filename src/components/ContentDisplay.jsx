import { motion } from "framer-motion";
import Card from "@components/Card";
import SubCategory from "@components/SubCategory";

import MH_demographic from "@MH/MH_demographic.png";
import MH_general_health from "@MH/MH_general_health.png";
import MH_mental_health from "@MH/MH_mental_health.png";
import MH_chronic_conditions from "@MH/MH_chronic_health.png";
import MH_healthcare_health from "@MH/MH_healthcare_health.png";
import MH_disability_health from "@MH/MH_disability_health.png";
import MH_education from "@MH/MH_education.png";
import MH_housing from "@MH/MH_housing.png";
import MH_labor from "@MH/MH_labor.png";
import MH_language from "@MH/MH_language.png";
import MH_community from "@MH/MH_community.png";

import BC_demographic from "@BC/BC_demographic.png";
import BC_general_health from "@BC/BC_general_health.png";
import BC_mental_health from "@BC/BC_mental_health.png";
import BC_chronic_conditions from "@BC/BC_chronic_health.png";
import BC_healthcare_health from "@BC/BC_healthcare_health.png";
import BC_disability_health from "@BC/BC_disability_health.png";
import BC_education from "@BC/BC_education.png";
import BC_housing from "@BC/BC_housing.png";
import BC_labor from "@BC/BC_labor.png";
import BC_language from "@BC/BC_language.png";
import BC_community from "@BC/BC_community.png";

export default function ContentDisplay({
  province,
  category,
  subcategory,
  onSubcategoryChange,
}) {
  const imageVariants = {
    initial: {
      scale: 0.8,
      opacity: 0.5,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const renderImage = (src, alt) => (
    <motion.div
      key={src}
      initial="initial"
      animate="animate"
      variants={imageVariants}
      className="w-full"
    >
      <img src={src} className="rounded-md w-full sm:rounded-2xl" alt={alt} />
    </motion.div>
  );

  return (
    <div>
      <Card>
        {/* ===========Homeland============ */}

        {province === "Homeland" && category === "demographic" && (
          <div className="p-2 sm:p-6">
            {renderImage(MH_demographic, "metis homeland demographic")}
          </div>
        )}

        {province === "Homeland" && category === "health" && (
          <div className="p-2 sm:p-6 items-center flex flex-col">
            <SubCategory
              onChange={onSubcategoryChange}
              currentSubcategory={subcategory}
              province={province}
              category={category}
            />
            <div className="mt-6">
              {subcategory === "general" &&
                renderImage(MH_general_health, "metis general health")}
              {subcategory === "mental" &&
                renderImage(MH_mental_health, "metis mental health")}
              {subcategory === "chronic" &&
                renderImage(MH_chronic_conditions, "metis chronic conditions")}
              {subcategory === "healthcare" &&
                renderImage(MH_healthcare_health, "metis healthcare access")}
              {subcategory === "disability" &&
                renderImage(MH_disability_health, "metis disability")}
            </div>
          </div>
        )}

        {province === "Homeland" && category === "education" && (
          <div className="p-2 sm:p-6">
            {renderImage(MH_education, "metis education")}
          </div>
        )}

        {province === "Homeland" && category === "housing" && (
          <div className="p-2 sm:p-6">
            {renderImage(MH_housing, "metis housing")}
          </div>
        )}

        {province === "Homeland" && category === "labor" && (
          <div className="p-2 sm:p-6">
            {renderImage(MH_labor, "metis labor")}
          </div>
        )}

        {province === "Homeland" && category === "language" && (
          <div className="p-2 sm:p-6">
            {renderImage(MH_language, "metis language")}
          </div>
        )}

        {province === "Homeland" && category === "community" && (
          <div className="p-2 sm:p-6">
            {renderImage(MH_community, "metis community")}
          </div>
        )}

        {/* ===========British Columbia============ */}
        {province === "BC" && category === "demographic" && (
          <div className="p-2 sm:p-6">
            {renderImage(BC_demographic, "bc demographic")}
          </div>
        )}

        {province === "BC" && category === "health" && (
          <div className="p-2 sm:p-6 items-center flex flex-col">
            <SubCategory
              onChange={onSubcategoryChange}
              currentSubcategory={subcategory}
              province={province}
              category={category}
            />
            <div className="mt-6">
              {subcategory === "general" &&
                renderImage(BC_general_health, "bc general health")}
              {subcategory === "mental" &&
                renderImage(BC_mental_health, "bc mental health")}
              {subcategory === "chronic" &&
                renderImage(BC_chronic_conditions, "bc chronic conditions")}
              {subcategory === "healthcare" &&
                renderImage(BC_healthcare_health, "bc healthcare access")}
              {subcategory === "disability" &&
                renderImage(BC_disability_health, "bc disability")}
            </div>
          </div>
        )}

        {province === "BC" && category === "education" && (
          <div className="p-2 sm:p-6">
            {renderImage(BC_education, "bc education")}
          </div>
        )}

        {province === "BC" && category === "housing" && (
          <div className="p-2 sm:p-6">
            {renderImage(BC_housing, "bc housing")}
          </div>
        )}

        {province === "BC" && category === "labor" && (
          <div className="p-2 sm:p-6">{renderImage(BC_labor, "bc labor")}</div>
        )}

        {province === "BC" && category === "language" && (
          <div className="p-2 sm:p-6">
            {renderImage(BC_language, "bc language")}
          </div>
        )}

        {province === "BC" && category === "community" && (
          <div className="p-2 sm:p-6">
            {renderImage(BC_community, "bc community")}
          </div>
        )}

        {/* ===========Alberta============ */}

        {province === "AB" && category === "demographic" && (
          <div className="p-2 sm:p-6">
            {renderImage(MH_demographic, "metis homeland demographic")}
          </div>
        )}
      </Card>
    </div>
  );
}
