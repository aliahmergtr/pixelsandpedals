import { Title, Button, Text, Container } from '@mantine/core';
import classes from './HeaderForCarousels.module.css';

export function HeaderTrack() {
    return (
        <Container size="lg" py="xl">
            <Title order={2} className={classes.title} ta="center" mt="sm">
                Track and Field
            </Title>
            <Text c="dimmed" className={classes.description} ta="center" mt="md">

            </Text>
        </Container>
    );
}