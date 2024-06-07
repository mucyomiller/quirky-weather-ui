import { Box } from '@/components/ui/Box';
import { Text } from '@/components/ui/Text';

const DailyForecast = () => {
    const days = [
        { day: 'Thu', temp: '28°', condition: 'rain' },
        { day: 'Fri', temp: '22°', condition: 'rain' },
        { day: 'Sat', temp: '13°', condition: 'rain' }
    ];

    return (
        <Box>
            {days.map((day, index) => (
                <Box key={index} className="flex justify-between items-center mb-2">
                    <Text className="text-md">{day.day}</Text>
                    <Text className="text-md">{day.temp}</Text>
                    <Text className="text-sm">{day.condition}</Text>
                </Box>
            ))}
        </Box>
    );
}

export { DailyForecast };

