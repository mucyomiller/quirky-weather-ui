import { Box } from '@/components/ui/Box';
import { Text } from '@/components/ui/Text';

const HourlyForecast = () => {
    const hours = [
        { time: '15:00', temp: '28°', condition: 'rain' },
        { time: '16:00', temp: '29°', condition: 'rain' },
        { time: '17:00', temp: '30°', condition: 'sunny' },
    ];

    return (
        //FIXME: Make this a scrollArea!
        <div className="mb-8">
            <Box className="flex space-x-4">
                {hours.map((hour, index) => (
                    <Box key={index} className="text-center">
                        <Text className="text-md">{hour.time}</Text>
                        <Text className="text-xl">{hour.temp}</Text>
                        <Text className="text-sm">{hour.condition}</Text>
                    </Box>
                ))}
            </Box>
        </div>
    );
}


export { HourlyForecast };
