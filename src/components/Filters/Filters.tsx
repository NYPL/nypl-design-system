/**
 * This component is used as a code and story example.
 * Filters are unique to every app that uses them, and there currently is no officially exported Filters component.
 * Do not import this component into your app.
 */
import Checkbox from "../Checkbox/Checkbox";
import React, { useState, useRef, MutableRefObject, useEffect } from "react";
import Button from "../Button/Button";
import { Villager, villagers } from "./AnimalCrossingVillagers";
import bem from "../../utils/bem";

export type FilterOptions = {
  genders: string[];
  personalities: string[];
  species: string[];
};

const allPersonalities: string[] = [
  ...new Set(villagers.map((villager: Villager) => villager.personality)),
];
const allSpecies: string[] = [
  ...new Set(villagers.map((villager: Villager) => villager.species)),
];
const allGenders = [
  ...new Set(villagers.map((villager: Villager) => villager.gender)),
];

export const Filters: React.FC<{
  filters: FilterOptions;
  updateVillagers: (updatedFilters) => void;
  isAutomatic: boolean;
  modifiers?: string[];
}> = ({ filters, updateVillagers, isAutomatic, modifiers }) => {
  const [selectedGenders, setSelectedGenders] = useState(filters.genders);
  const [selectedPersonalities, setSelectedPersonality] = useState(
    filters.personalities
  );
  const [selectedSpecieses, setSelectedSpecies] = useState(filters.species);

  // Automatic Form functionality
  // Automatic forms should still call `form.submit()` but must do it through a ref.
  const formRef: MutableRefObject<HTMLFormElement> = useRef<HTMLFormElement>(
    null
  );

  // Since setState hooks are async, we must add a useEffect hook to submit
  // the form after state updates
  useEffect(() => {
    if (isAutomatic && formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  }, [isAutomatic, selectedGenders]);

  const onGenderSelectChange = (selectedGender: string) => {
    const isSelected = selectedGenders.find(gender => {
      return gender === selectedGender;
    });
    setSelectedGenders(
      isSelected
        ? selectedGenders.filter(gender => {
            return selectedGender !== gender;
          })
        : [...selectedGenders, selectedGender]
    );
  };

  const onSelectedPersonalityChange = (selectedPersonality: string) => {
    const isSelected = selectedPersonalities.find(personality => {
      return personality === selectedPersonality;
    });
    setSelectedPersonality(
      isSelected
        ? selectedPersonalities.filter(personality => {
            return personality !== selectedPersonality;
          })
        : [...selectedPersonalities, selectedPersonality]
    );
  };

  const onSelectedSpeciesChange = (selectedSpecies: string) => {
    const isSelected = selectedSpecieses.find(species => {
      return species === selectedSpecies;
    });
    setSelectedSpecies(
      isSelected
        ? selectedSpecieses.filter(species => {
            return species !== selectedSpecies;
          })
        : [...selectedSpecieses, selectedSpecies]
    );
  };

  const submitForm = e => {
    console.log("submitted");

    e.preventDefault();
    updateVillagers({
      genders: selectedGenders,
      personalities: selectedPersonalities,
      species: selectedSpecieses,
    });
  };

  return (
    <div className={bem("filters", modifiers)}>
      <form onSubmit={e => submitForm(e)} ref={formRef}>
        {!isAutomatic && <Button type="submit">Apply</Button>}
        <fieldset>
          <legend> Gender </legend>
          {allGenders.map(gender => {
            return (
              <Checkbox
                key={`gender-${gender}`}
                labelOptions={{
                  id: `gender-${gender}`,
                  labelContent: <>{gender}</>,
                }}
                checked={
                  !!selectedGenders.find(selGender => {
                    return gender === selGender;
                  })
                }
                onChange={() => {
                  onGenderSelectChange(gender);
                }}
              />
            );
          })}
        </fieldset>

        <fieldset>
          <legend> Personality </legend>
          {allPersonalities.map(personality => {
            return (
              <Checkbox
                key={`personality=${personality}`}
                labelOptions={{
                  id: `personality-${personality}`,
                  labelContent: <>{personality}</>,
                }}
                onChange={() => {
                  onSelectedPersonalityChange(personality);
                }}
              />
            );
          })}
        </fieldset>

        <fieldset>
          <legend> Species </legend>
          {allSpecies.map(species => {
            return (
              <Checkbox
                key={`species=${species}`}
                labelOptions={{
                  id: `species-${species}`,
                  labelContent: <>{species}</>,
                }}
                onChange={() => {
                  onSelectedSpeciesChange(species);
                }}
              />
            );
          })}
        </fieldset>
      </form>
    </div>
  );
};
