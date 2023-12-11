// Функция принимает массив meetups,
// и возвращает суммарное количество человек, находящихся на активных митапах

interface IMeetup {
    name: string;
    isActive: boolean;
    members: number;
}

function membersOnActiveMeetups(meetups: IMeetup[]): number {
    return meetups.reduce((acc, el) => el.isActive ? acc += el.members : acc, 0);
}

const meetups: IMeetup[] = [
    { name: 'JavaScript', isActive: true, members: 100 },
    { name: 'Angular', isActive: true, members: 900 },
    { name: 'Node', isActive: false, members: 600 },
    { name: 'React', isActive: true, members: 500 },
];

console.log(membersOnActiveMeetups(meetups)); // 1500

