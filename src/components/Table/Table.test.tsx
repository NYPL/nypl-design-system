import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export const columnHeaders = [
  "First Name",
  "Last Name",
  "Nick Name",
  "Address1",
  "City",
  "Zipcode",
  "State",
];

export const tableData = [
  ["Tom", "Nook", "Tanukichi", "Main Street", "New York", "23458", "NY"],
  ["Isabelle", "-", "Shizue", "Walnut Street", "New York", "23458", "NY"],
  ["K.K.", "Slider", "Totakeke", "Niper Place", "New York", "98765", "NY"],
  [
    "Sonny",
    "Resetti",
    "Risetto san",
    "Village Road",
    "New York",
    "09873",
    "NY",
  ],
];

describe("Table Accessibility", () => {
  it("passes axe accessibility test with the columnHeaders prop", async () => {
    const { container } = render(<Table contentData={columnHeaders} />);
    expect(await axe(container)).toHaveNoViolations();
    console.log(container);
  });

  it("passes axe accessibility test with empty columnHeaders prop", async () => {
    const { container } = render(<Table contentData={[]} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test with empty tableData prop", async () => {
    const { container } = render(<Table contentData={tableData} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test with children components", async () => {
    const { container } = render(
      <Table>
        <TableCaption></TableCaption>
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Nick Name</Th>
            <Th>Address1</Th>
            <Th>City</Th>
            <Th>Zipcode</Th>
            <Th>State</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Tom</Td>
            <Td>Nook</Td>
            <Td>Tanukichi</Td>
            <Td>Main Street</Td>
            <Td>New York</Td>
            <Td>23458</Td>
            <Td>NY</Td>
          </Tr>
          <Tr>
            <Td>Isabelle</Td>
            <Td>-</Td>
            <Td>Shizue</Td>
            <Td>Walnut Street</Td>
            <Td>New York</Td>
            <Td>23458</Td>
            <Td>NY</Td>
          </Tr>
          <Tr>
            <Td>K.K.</Td>
            <Td>Slider</Td>
            <Td>Totakeke</Td>
            <Td>Niper Place</Td>
            <Td>New York</Td>
            <Td>98765</Td>
            <Td>NY</Td>
          </Tr>
          <Tr>
            <Td>Sonny</Td>
            <Td>Resetti</Td>
            <Td>Risetto san</Td>
            <Td>Village Road</Td>
            <Td>New York</Td>
            <Td>09873</Td>
            <Td>NY</Td>
          </Tr>
        </Tbody>
      </Table>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
