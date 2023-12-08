import { Grid, Metric, Text, Card, Divider, Flex } from "@tremor/react";
import React from "react";
import { persons } from "../data";
import Icon from "@/components/ui/icon";

const SectionFour: React.FC = () => {
  return (
    <section className="space-y-5">
      <div>
        <Metric>Projects</Metric>
        <Text>You've completed over 200 projects till now, keep it up!</Text>
      </div>

      <Grid numItems={3} className="gap-5">
        {persons.map((person) => (
          <Card key={person.name}>
            <div className="flex flex-col items-center gap-1">
              <img
                className="h-20 w-20 rounded-full border object-cover ring-2"
                src={person.photo}
                alt=""
              />
              <Text className="text-lg font-semibold">{person.name}</Text>
              <Text>{person.email}</Text>
            </div>

            <Divider />
            <Flex className="mt-4">
              <Text>
                Redirect to landing page design {person.redirectTo.title}
              </Text>
              <Icon name="ArrowRight" className="text-blue" />
            </Flex>
          </Card>
        ))}
      </Grid>
    </section>
  );
};

export default SectionFour;
