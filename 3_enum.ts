enum Membership {
    Simple,
    Standart, 
    Premium
}

const membership = Membership.Standart
console.log(membership); // выведет 1

const membershipReverse = Membership[2]
console.log(membershipReverse) //выведет Premium


//Можем задать и свои значения
enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social) //Выведет INSTAGRAM