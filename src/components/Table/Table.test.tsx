import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption,} from '@chakra-ui/react'

describe("Table Accessibility", () => {
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
