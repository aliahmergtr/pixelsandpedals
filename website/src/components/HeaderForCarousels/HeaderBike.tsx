import { Title, Button, Text, Container } from '@mantine/core';
import classes from './HeaderForCarousels.module.css';

export function HeaderBike() {
    return (
        <Container size="lg" py="xl">
            <Title order={2} className={classes.title} ta="center" mt="sm">
                Bike Restoration
            </Title>
            <Text c="dimmed" className={classes.description} ta="center" mt="md">

            </Text>
        </Container>
    );
}