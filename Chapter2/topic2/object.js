const guntur = {
    name: "guntur",
    address: {
        city: "Balikpapan",
        province: "Kaltim",
    },
};
console.log(guntur);

//adad object
guntur.job = "student";
console.log(guntur);

const gunturDetails = `${guntur.name} is from ${guntur.address.city}, ${guntur.address.province}.`;
console.log(gunturDetails);