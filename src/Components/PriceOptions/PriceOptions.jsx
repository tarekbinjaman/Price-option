import PriceOpton from "../PriceOptoin/PriceOpton";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 personal training session per month",
            "Free fitness assessment",
            "Discount on supplements",
            "Access to online workout programs"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited group fitness classes",
            "2 personal training sessions per month",
            "Access to sauna",
            "Free fitness assessment",
            "Discount on merchandise",
            "Access to nutritional counseling"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 69.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited group fitness classes",
            "4 personal training sessions per month",
            "Access to sauna and pool",
            "Guest pass privileges",
            "Free fitness assessment",
            "Discount on nutrition products",
            "Priority booking for classes and sessions"
          ]
        },
        {
          "id": 4,
          "name": "Family Membership",
          "price": 89.99,
          "features": [
            "Access to gym equipment for 2 adults and 2 children",
            "Locker room access",
            "Unlimited group fitness classes",
            "4 personal training sessions per month",
            "Access to sauna and pool",
            "Guest pass privileges",
            "Free fitness assessments for family members",
            "Family-friendly classes and activities",
            "Discounts on kids' programs"
          ]
        },
        {
          "id": 5,
          "name": "VIP Membership",
          "price": 119.99,
          "features": [
            "24/7 access to gym equipment",
            "Private locker",
            "Unlimited group fitness and specialty classes",
            "Unlimited personal training sessions",
            "Access to VIP lounge, sauna, and pool",
            "Dedicated personal trainer",
            "Exclusive events and workshops",
            "Free fitness assessments and progress tracking",
            "Complimentary massage therapy sessions",
            "First access to new classes and equipment"
          ]
        }
      ];
      
    return (
        <div  className="m-12">
            <h2 className="text-5xl mb-4">Best prices in Town</h2>
            <div className="grid grid-cols-3 gap-9">
                            {
                priceOptions.map(option => <PriceOpton option={option} key={option.id}></PriceOpton>)
            }
            </div>

        </div>
    );
};

export default PriceOptions;