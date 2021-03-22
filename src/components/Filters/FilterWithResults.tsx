import React, { useState } from "react";

import { Villager, villagers } from "./AnimalCrossingVillagers";
import Heading from "../Heading/Heading";
import Card from "../Card/Card";
import bem from "../../utils/bem";
import Image from "../Image/Image";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { ButtonTypes } from "../Button/ButtonTypes";
import { FilterOptions, Filters } from "./Filters";

export const defaultFilters: FilterOptions = {
  genders: [],
  personalities: [],
  species: [],
};

const Results: React.FC<{ shownVillagers: Villager[] }> = ({
  shownVillagers,
}) => {
  const VillagerCard: React.FC<{ villager: Villager }> = ({ villager }) => {
    return (
      <Card
        id={villager.name}
        image={
          <Image
            src={villager.portrait}
            alt={`Portrait for ${villager.name}`}
          />
        }
      >
        <>
          <Heading level={3}>{villager.name}</Heading>
          <table>
            <tbody>
              <tr>
                <th>Gender:</th>
                <td>{villager.gender}</td>
              </tr>
              <tr>
                <th>Species:</th>
                <td>{villager.species}</td>
              </tr>
              <tr>
                <th>Personality:</th>
                <td>{villager.personality}</td>
              </tr>
              <tr>
                <th>Catchphrase:</th>
                <td>{villager.catchphrase}</td>
              </tr>
              <tr>
                <th>Favourite Saying:</th>
                <td>{villager.favoriteSaying}</td>
              </tr>
            </tbody>
          </table>
        </>
      </Card>
    );
  };
  return (
    <>
      {shownVillagers.map(villager => {
        return (
          <VillagerCard key={villager.name} villager={villager}></VillagerCard>
        );
      })}
    </>
  );
};

export const FilterWithResults: React.FC<{ isAutomatic: boolean }> = ({
  isAutomatic,
}) => {
  const [shownVillagers, setShownVillagers] = useState(villagers);

  const [filters, setFilters] = useState(defaultFilters);
  const [modalOpen, setModalOpen] = useState(false);

  const updateVillagers = (filters: FilterOptions) => {
    setShownVillagers(
      villagers.filter(villager => {
        const genderMatch = filters.genders.length
          ? !!filters.genders.find(gender => villager.gender === gender)
          : true;

        const personalityMatch = filters.personalities.length
          ? !!filters.personalities.find(
              personality => villager.personality === personality
            )
          : true;

        const speciesMatch = filters.species.length
          ? !!filters.species.find(species => villager.species === species)
          : true;

        return genderMatch && personalityMatch && speciesMatch;
      })
    );
    console.log("filters", filters);
    setFilters(filters);
  };

  return (
    <div className={bem("layout-container nypl-ds")}>
      <main className={bem("main", ["with-sidebar"])}>
        <div className={bem("content-secondary", ["with-sidebar-left"])}>
          <Filters
            modifiers={["sidebar"]}
            filters={filters}
            isAutomatic={isAutomatic}
            updateVillagers={updateVillagers}
          />
        </div>

        <div className={bem("content-primary", ["with-sidebar-left"])}>
          <Heading
            level={2}
          >{`Showing ${shownVillagers.length} Villagers`}</Heading>

          <Button
            type="button"
            buttonType={ButtonTypes.Secondary}
            onClick={() => {
              setModalOpen(true);
            }}
            className={bem("show-button", [], "filters")}
          >
            {`Show Filters `}
          </Button>

          <Results shownVillagers={shownVillagers} />
          {modalOpen && (
            <Modal>
              <Button
                buttonType={ButtonTypes.Secondary}
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                Close
              </Button>
              <Heading
                level={2}
              >{`Showing ${shownVillagers.length} Villagers`}</Heading>
              <Filters
                modifiers={["modal"]}
                filters={filters}
                isAutomatic={isAutomatic}
                updateVillagers={updateVillagers}
              />
            </Modal>
          )}
        </div>
      </main>
    </div>
  );
};
