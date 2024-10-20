import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Welcome to{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'red', to: 'orange' }}
                            >
                                Pixels and Pedals
                            </Text>{' '}
                        </Title>

                        <Text className={classes.description} mt={30}>
                            This is Syed Ali Ahmer’s personal blog and I am so excited to take you on a journey where I share my experiences and hobbies with all of you!


                            <br />
                            <br />
                            I am extremely passionate about capturing nature’s beauty through my lens, keeping my body and mind engaged in healthy practices by participating in athletics, and serving my community however possible.
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{ from: 'red', to: 'orange' }}
                            size="xl"
                            className={classes.control}
                            mt={40}
                        >
                            Scroll for more
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}