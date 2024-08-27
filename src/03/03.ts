import { student } from "./../02/02";
import { StudentType } from "../02/02";
import { GovernmentBuildingsType } from "../02/02_02";

const sum = (a: number, b: number) => {
  return a + b;
};

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill,
  });
};

export const makeStudentActive = (s: StudentType) => {
  s.isActive = true;
};

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
  return student.address.city.title === cityName;
};

export const addMoneyToBudget = (
  building: GovernmentBuildingsType,
  adjustmentBudget: number
) => {
  building.budget += adjustmentBudget;
};
