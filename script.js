// obj
// 1. Створіть об'єкт ""bankAccount"" з властивостями ""ownerName"", ""accountNumber"", ""balance"". Додайте до об'єкту метод ""deposit"", який дозволяє додавати гроші на рахунок, та метод ""withdraw"", який дозволяє знімати гроші з рахунку. Методи повинні
// зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку




const bankAccount = {
    ownerName: 'Sanya',
    accountNumber: 12,
    balance: 4000,


    deposit: function (amount, callback) {
        this.balance += amount;
        callback(`Ви поповнили рахунок на ${amount} грн. Новий баланс: ${this.balance} грн.`);
    },


    withdraw: function (amount, callback) {
        if (amount > this.balance) {
            callback("Недостатньо коштів на рахунку!");
        } else {
            this.balance -= amount;
            callback(`Ви зняли ${amount} грн. Новий баланс: ${this.balance} грн.`);
        }
    }
};


const updateBalance = (message) => {
    document.getElementById("balance").innerText = bankAccount.balance;
    alert(message);
};


document.getElementById("depositBtn").addEventListener("click", () => {
    let amount = Number(prompt("Введіть суму для поповнення:"));
    if (!isNaN(amount) && amount > 0) {
        bankAccount.deposit(amount, updateBalance);
    } else {
        alert("Невірна сума!");
    }
});

document.getElementById("withdrawBtn").addEventListener("click", () => {
    let amount = Number(prompt("Введіть суму для зняття:"));
    if (!isNaN(amount) && amount > 0) {
        bankAccount.withdraw(amount, updateBalance);
    } else {
        alert("Невірна сума!");
    }
});

// Створіть об'єкт ""weather"" з властивостями ""temperature"", ""humidity"", ""windSpeed"". Додайте до об'єкту метод, який повертає ""true"",
// якщо температура нижче 0 градусів Цельсія, та ""false"", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув ""true"" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
    temperature: null,
    humidity: 60,
    windSpeed: 5,

    isBelowZero: function () {
        if (this.temperature < 0) {
            return true;
        } else {
            return false;
        }
    }
};


document.getElementById("checkTemperatureBtn").addEventListener("click", () => {

    const temperatureInput = document.getElementById("temperatureInput").value;

    if (!isNaN(temperatureInput)) {
        weather.temperature = Number(temperatureInput);

        const isBelowZero = weather.isBelowZero();

        const message = isBelowZero
            ? "Температура нижче 0 градусів Цельсія."
            : "Температура вище або рівна 0 градусів Цельсія.";

        document.getElementById("temperatureMessage").innerText = message;
    } else {
        alert("Введіть правильну температуру!");
    }
});



// 3. Створіть об’єкт ""user"", якbq буде мати властивості ""name"", ""email"", ""password"". Додайте метод ""login"",
// який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт

const user = {
    name: '',
    email: '',
    password: '',

    register: function (name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        alert("Користувач успішно зареєстрований!");
    },

    login: function (email, password) {
        if (this.email === email && this.password === password) {
            return "Вітаємо, ви увійшли в систему!";
        } else {
            return "Невірний email або пароль!";
        }
    }
};

document.getElementById("registerBtn").addEventListener("click", () => {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    if (name && email && password) {
        user.register(name, email, password);
    } else {
        alert("Будь ласка, заповніть всі поля для реєстрації!");
    }
});

document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("loginEmailInput").value;
    const password = document.getElementById("loginPasswordInput").value;
    const loginMessage = user.login(email, password);

    document.getElementById("loginMessage").innerText = loginMessage;
});

// Створіть об'єкт ""movie"" з властивостями ""title"", ""director"", ""year"", ""rating"". Додайте до об'єкту метод, який повертає ""true"", якщо рейтинг фільму вище 8, та ""false"", якщо рейтинг фільму 8 або нижче.
// Вивести значення властивостей на сторінку. Якщо метод повернув ""true"" то змінити колір тексту поля title на зелений.

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,

    checkRating: function() {
        return this.rating > 8;
    }
};

document.getElementById("movieTitle").innerText = movie.title;
document.getElementById("movieDirector").innerText = movie.director;
document.getElementById("movieYear").innerText = movie.year;
document.getElementById("movieRating").innerText = movie.rating;

if (movie.checkRating()) {
    document.getElementById("movieTitle").style.color = "green";
}


// ДОДАТКОВЕ
// та гора тексту що там в мене тут весь екран займе, тому я не вставлю

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],

    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com"
    }
};


const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;


const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];


apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");


apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
    country: "Jamaica",
    city: "Kingston"
};

console.log(apartment);