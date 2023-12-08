import {
  Card,
  Metric,
  Text,
  List,
  ListItem,
  ProgressBar,
  Grid,
  Flex,
  Button,
} from "@tremor/react";

const locationA = [
  {
    name: "Product A",
    share: 34,
    amount: "$ 11,715",
  },
  {
    name: "Product B",
    share: 24,
    amount: "$ 8,269",
  },
  {
    name: "Product C",
    share: 11,
    amount: "$ 3,790",
  },
];

const salesSummary = [
  {
    name: "Order Total",
    amount: "$187,650",
  },
  {
    name: "Earning",
    amount: "$25,500",
  },
  {
    name: "Refunded",
    amount: "$ 592",
  },
];

const categories = [
  {
    title: "Sales • Location A",
    metric: "$ 34,456",
    data: locationA,
  },
];

export default function SectionThree() {
  return (
    <Grid numItems={1} numItemsMd={2} className="gap-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
          <List className="mt-4">
            {item.data.map((product) => (
              <ListItem key={product.name}>
                <div className="w-full">
                  <Text>{product.name}</Text>
                  <ProgressBar
                    value={product.share}
                    label={`${product.share}%`}
                    tooltip={product.amount}
                  />
                </div>
              </ListItem>
            ))}
          </List>
        </Card>
      ))}

      <Card className="space-y-5">
        <div className="space-y-1">
          <Text>Current Balance</Text>
          <Metric>$124,34</Metric>
        </div>

        <List className="mt-1">
          {salesSummary.map((sales) => (
            <ListItem key={sales.amount}>
              <span>{sales.name}</span>
              <span>{sales.amount}</span>
            </ListItem>
          ))}
        </List>

        <Flex>
          <Button>Request</Button>

          <Button variant="primary" color="orange">
            Transfer
          </Button>
        </Flex>
      </Card>
    </Grid>
  );
}
