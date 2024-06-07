import { Text } from '@/components/ui/Text';
import { FaCloudRain } from 'react-icons/fa';
import { Card } from './ui/card';

const CurrentWeather = () => {
    return (
        <Card className="mb-4 p-4">
            <div className="flex items-center justify-between">
                <div>
                    <Text variant="h1" className="text-4xl font-bold">
                        28°
                    </Text>
                    <Text variant="h2" className="text-xl">
                        Rainy Day
                    </Text>
                </div>
                <FaCloudRain size={48} />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <Text variant="h3" className="text-lg font-semibold">
                        Feels Like
                    </Text>
                    <Text variant="body" className="text-gray-400">
                        30°
                    </Text>
                </div>
                <div>
                    <Text variant="h3" className="text-lg font-semibold">
                        Precipitation
                    </Text>
                    <Text variant="body" className="text-gray-400">
                        2.3&quot; in last 24h
                    </Text>
                </div>
            </div>
        </Card>
    );
};

export { CurrentWeather };
