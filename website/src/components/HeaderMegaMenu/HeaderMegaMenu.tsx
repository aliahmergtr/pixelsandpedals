import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconAffiliate, IconAtom, IconDatabase, IconOctagon } from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';

const mockdata = [
    {
        icon: IconAffiliate,
        title: 'Bike Restoration',
        description: '',
        link: '/bikerestoration',
    },
    {
        icon: IconAtom,
        title: 'Track and Field',
        description: '',
        link: '/track',
    },
    {
        icon: IconDatabase,
        title: 'Photography',
        description: '',
        link: '/photography',
    },

];

export function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    const links = mockdata.map((item) => (
        <Anchor href={item.link} className={classes.subLink} key={item.title}>
            <UnstyledButton className={classes.subLink} key={item.title}>
                <Group wrap="nowrap" align="flex-start">
                    <ThemeIcon size={34} variant="default" radius="md">
                        <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
                    </ThemeIcon>
                    <div>
                        <Text size="sm" fw={500}>
                            {item.title}
                        </Text>
                        <Text size="xs" c="dimmed">
                            {item.description}
                        </Text>
                    </div>
                </Group>
            </UnstyledButton>
        </Anchor>
    ));

    return (
        <Box>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Group h="100%" gap={0} visibleFrom="sm">
                        <a href="/" className={classes.link}>
                            Home
                        </a>
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href="#" className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            Activities
                                        </Box>
                                        <IconChevronDown
                                            style={{ width: rem(16), height: rem(16) }}
                                            color={theme.colors.blue[6]}
                                        />
                                    </Center>
                                </a>
                            </HoverCard.Target>

                            <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                                <SimpleGrid cols={2} spacing={0}>
                                    {links}
                                </SimpleGrid>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <a href="/contact" className={classes.link}>
                            Contact
                        </a>
                    </Group>

                    <Group visibleFrom="sm">
                        <a href="/login" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="gradient"
                                component="span"
                                gradient={{ from: 'red', to: 'orange' }}
                                autoContrast
                            >
                                Log in
                            </Button>
                        </a>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />

                    <a href="/" className={classes.link}>
                        Home
                    </a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Projects
                            </Box>
                            <IconChevronDown
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.blue[6]}
                            />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <a href="/People" className={classes.link}>
                        People
                    </a>
                    <a href="#" className={classes.link}>
                        Biosensor
                    </a>

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <a href="/login" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="gradient"
                                gradient={{ from: 'violet', to: 'blue' }}
                            >
                                Log in
                            </Button>
                        </a>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}