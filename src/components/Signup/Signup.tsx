"use client";

import {
    useEffect,
    useState,
    type ChangeEvent,
    type FormEvent,
} from "react";

import styles from "./Signup.module.css";
import Image from "next/image";
import Link from "next/link";

type CountryState = {
    name: string;
    state_code?: string;
};

type CountryData = {
    name: string;
    iso2?: string;
    iso3?: string;
    states: CountryState[];
};

type CityData = {
    name: string;
};

type DistrictData = {
    name: string;
};

function Signup() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        experience: "",
    });

    const [accountType, setAccountType] = useState("");
    const [officialRole, setOfficialRole] = useState("");

    const [documentsFile, setDocumentsFile] =
        useState<File | null>(null);

    const [certificationFile, setCertificationFile] =
        useState<File | null>(null);

    const [licenceFile, setLicenceFile] =
        useState<File | null>(null);

    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [town, setTown] = useState("");
    const [pincode, setPincode] = useState("");

    const [countries, setCountries] =
        useState<CountryData[]>([]);

    const [states, setStates] =
        useState<CountryState[]>([]);

    const [districts, setDistricts] =
        useState<DistrictData[]>([]);

    const [towns, setTowns] =
        useState<CityData[]>([]);

    const [loadingCountries, setLoadingCountries] =
        useState(false);

    const [loadingStates, setLoadingStates] =
        useState(false);

    const [loadingDistricts, setLoadingDistricts] =
        useState(false);

    const [loadingTowns, setLoadingTowns] =
        useState(false);

    const experienceOptions = [
        "0 Experience",
        "1–2 Years",
        "2–5 Years",
        "5–10 Years",
        "10+ Years",
    ];

    useEffect(() => {
        const loadCountries = async () => {
            try {
                setLoadingCountries(true);

                const response = await fetch(
                    "https://countriesnow.space/api/v0.1/countries/states"
                );

                if (!response.ok) {
                    throw new Error(
                        "Unable to load countries"
                    );
                }

                const result = await response.json();

                if (result.error) {
                    throw new Error(result.msg);
                }

                setCountries(result.data || []);
            } catch (error) {
                console.error(
                    "Country loading error:",
                    error
                );
            } finally {
                setLoadingCountries(false);
            }
        };

        loadCountries();
    }, []);

    useEffect(() => {
        if (!country) {
            setStates([]);
            return;
        }

        const selectedCountry = countries.find(
            (item) => item.name === country
        );

        if (selectedCountry) {
            setStates(selectedCountry.states || []);
        } else {
            setStates([]);
        }
    }, [country, countries]);

    useEffect(() => {
        if (!country || !state) {
            setTowns([]);
            return;
        }

        const loadTowns = async () => {
            try {
                setLoadingTowns(true);

                const response = await fetch(
                    "https://countriesnow.space/api/v0.1/countries/state/cities",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                        },
                        body: JSON.stringify({
                            country: country,
                            state: state,
                        }),
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        "Unable to load towns"
                    );
                }

                const result = await response.json();

                if (result.error) {
                    throw new Error(result.msg);
                }

                const cityList =
                    (result.data || []).map(
                        (city: string) => ({
                            name: city,
                        })
                    );

                setTowns(cityList);
            } catch (error) {
                console.error(
                    "Town loading error:",
                    error
                );

                setTowns([]);
            } finally {
                setLoadingTowns(false);
            }
        };

        loadTowns();
    }, [country, state]);

    useEffect(() => {
        if (!country || !state) {
            setDistricts([]);
            return;
        }

        const loadDistricts = async () => {
            try {
                setLoadingDistricts(true);

                const url =
                    `https://nominatim.openstreetmap.org/search` +
                    `?country=${encodeURIComponent(country)}` +
                    `&state=${encodeURIComponent(state)}` +
                    `&format=json` +
                    `&addressdetails=1` +
                    `&limit=100`;

                const response = await fetch(url, {
                    headers: {
                        Accept:
                            "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(
                        "Unable to load districts"
                    );
                }

                const result = await response.json();

                const districtMap =
                    new Map<string, DistrictData>();

                result.forEach(
                    (item: {
                        address?: {
                            county?: string;
                            state_district?: string;
                            district?: string;
                            municipality?: string;
                        };
                    }) => {
                        const districtName =
                            item.address?.state_district ||
                            item.address?.district ||
                            item.address?.county ||
                            item.address?.municipality;

                        if (districtName) {
                            districtMap.set(
                                districtName,
                                {
                                    name: districtName,
                                }
                            );
                        }
                    }
                );

                const districtList =
                    Array.from(
                        districtMap.values()
                    ).sort((a, b) =>
                        a.name.localeCompare(
                            b.name
                        )
                    );

                setDistricts(districtList);
            } catch (error) {
                console.error(
                    "District loading error:",
                    error
                );

                setDistricts([]);
            } finally {
                setLoadingDistricts(false);
            }
        };

        loadDistricts();
    }, [country, state]);

    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleFileChange = (
        e: ChangeEvent<HTMLInputElement>,
        type:
            | "documents"
            | "certification"
            | "licence"
    ) => {
        const file =
            e.target.files?.[0] || null;

        if (type === "documents") {
            setDocumentsFile(file);
        }

        if (type === "certification") {
            setCertificationFile(file);
        }

        if (type === "licence") {
            setLicenceFile(file);
        }
    };

    const handleAccountTypeChange = (
        e: ChangeEvent<HTMLSelectElement>
    ) => {
        const value = e.target.value;

        setAccountType(value);
        setOfficialRole("");

        setFormData((previous) => ({
            ...previous,
            experience: "",
        }));

        setDocumentsFile(null);
        setCertificationFile(null);
        setLicenceFile(null);
    };

    const handleOfficialRoleChange = (
        e: ChangeEvent<HTMLSelectElement>
    ) => {
        const value = e.target.value;

        setOfficialRole(value);

        setFormData((previous) => ({
            ...previous,
            experience: "",
        }));

        setDocumentsFile(null);
        setCertificationFile(null);
        setLicenceFile(null);
    };

    const handleCountryChange = (
        e: ChangeEvent<HTMLSelectElement>
    ) => {
        const value = e.target.value;

        setCountry(value);

        /* Reset dependent fields */
        setState("");
        setDistrict("");
        setTown("");
        setPincode("");

        setStates([]);
        setDistricts([]);
        setTowns([]);
    };

    const handleStateChange = (
        e: ChangeEvent<HTMLSelectElement>
    ) => {
        const value = e.target.value;

        setState(value);

        /* Reset dependent fields */
        setDistrict("");
        setTown("");
        setPincode("");

        setDistricts([]);
        setTowns([]);
    };

    const handleDistrictChange = (
        e: ChangeEvent<HTMLSelectElement>
    ) => {
        const value = e.target.value;

        setDistrict(value);

        setTown("");
        setPincode("");
    };

    const handleTownChange = (
        e: ChangeEvent<HTMLSelectElement>
    ) => {
        setTown(e.target.value);
    };

    const handlePincodeChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const value =
            e.target.value.replace(/\D/g, "");

        if (value.length <= 10) {
            setPincode(value);
        }
    };

    const renderFileInput = (
        label: string,
        type:
            | "documents"
            | "certification"
            | "licence",
        file: File | null
    ) => {
        return (
            <div className={styles.inputGroup}>
                <label>{label}</label>

                <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                        handleFileChange(
                            e,
                            type
                        )
                    }
                />

                {file && (
                    <small>
                        Selected file:{" "}
                        {file.name}
                    </small>
                )}
            </div>
        );
    };
    const renderOfficialDetails = () => {
        if (!officialRole) {
            return null;
        }

        let roleName = "";

        switch (officialRole) {
            case "judge":
                roleName = "Judge";
                break;

            case "referee":
                roleName = "Referee";
                break;

            case "coach":
                roleName = "Coach";
                break;

            case "technical-official":
                roleName =
                    "Technical Official";
                break;

            case "classifier":
                roleName = "Classifier";
                break;

            default:
                roleName = "Official";
        }

        return (
            <div className={styles.dynamicSection}>
                <h3>
                    {roleName} Details
                </h3>

                {renderFileInput(
                    "Documents",
                    "documents",
                    documentsFile
                )}

                <div
                    className={
                        styles.inputGroup
                    }
                >
                    <label>
                        Experience
                    </label>

                    <select
                        name="experience"
                        value={
                            formData.experience
                        }
                        onChange={
                            handleChange
                        }
                    >
                        <option value="">
                            Select Experience
                        </option>

                        {experienceOptions.map(
                            (option) => (
                                <option
                                    key={option}
                                    value={option}
                                >
                                    {option}
                                </option>
                            )
                        )}
                    </select>
                </div>

                {renderFileInput(
                    "Licence",
                    "licence",
                    licenceFile
                )}

                {renderFileInput(
                    "Certification",
                    "certification",
                    certificationFile
                )}
            </div>
        );
    };

    const handleSubmit = (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const signupData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,

            accountType,
            officialRole,

            address: {
                country,
                state,
                district,
                town,
                pincode,
            },

            experience:
                formData.experience,

            documents:
                documentsFile?.name || "",

            certification:
                certificationFile?.name || "",

            licence:
                licenceFile?.name || "",
        };

        console.log(
            "WABA Signup Data:",
            signupData
        );

        alert(
            "Signup submitted successfully!"
        );
    };

    return (
        <div className={styles.signupPage}>
            <div className={styles.signupContainer}>

                <section className={styles.leftSection}>

                    <div className={styles.leftContent}>

                        {/* WABA LOGO */}
                        <div className={styles.logo}>
                            <Image
                                src="/images/logo.png"
                                alt="WABA Logo"
                                width={150}
                                height={70}
                                priority
                            />
                        </div>

                        <h1>Join WABA</h1>

                        <p>
                            Become a part of the Wheelchair Adaptive
                            Boxing Association and contribute to the
                            growth of adaptive boxing.
                        </p>

                        <div className={styles.tags}>
                            <span>EMPOWER</span>
                            <span>ADAPT</span>
                            <span>FIGHT</span>
                            <span>INSPIRE</span>
                        </div>

                    </div>

                </section>


                <div className={styles.rightSection}>

                    <div
                        className={
                            styles.formWrapper
                        }
                    >

                        <h2>
                            Create Account
                        </h2>

                        <p
                            className={
                                styles.subtitle
                            }
                        >
                            Register with WABA
                        </p>

                        <form
                            onSubmit={
                                handleSubmit
                            }
                        >

                            <div
                                className={
                                    styles.inputGroup
                                }
                            >
                                <label>
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={
                                        formData.name
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div
                                className={
                                    styles.inputGroup
                                }
                            >
                                <label>
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={
                                        formData.email
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div
                                className={
                                    styles.inputGroup
                                }
                            >
                                <label>
                                    Password
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    value={
                                        formData.password
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    placeholder="Create password"
                                    required
                                />
                            </div>


                            <div
                                className={
                                    styles.inputGroup
                                }
                            >
                                <label>
                                    Address
                                </label>

                                <select
                                    value={
                                        country
                                    }
                                    onChange={
                                        handleCountryChange
                                    }
                                    required
                                >
                                    <option value="">
                                        {loadingCountries
                                            ? "Loading countries..."
                                            : "Select Country"}
                                    </option>

                                    {countries.map(
                                        (
                                            item
                                        ) => (
                                            <option
                                                key={
                                                    item.iso2 ||
                                                    item.name
                                                }
                                                value={
                                                    item.name
                                                }
                                            >
                                                {
                                                    item.name
                                                }
                                            </option>
                                        )
                                    )}
                                </select>

                                <select
                                    value={
                                        state
                                    }
                                    onChange={
                                        handleStateChange
                                    }
                                    disabled={
                                        !country
                                    }
                                    required
                                >
                                    <option value="">
                                        {loadingStates
                                            ? "Loading states..."
                                            : "Select State"}
                                    </option>

                                    {states.map(
                                        (
                                            item
                                        ) => (
                                            <option
                                                key={
                                                    item.state_code ||
                                                    item.name
                                                }
                                                value={
                                                    item.name
                                                }
                                            >
                                                {
                                                    item.name
                                                }
                                            </option>
                                        )
                                    )}
                                </select>

                                <select
                                    value={
                                        district
                                    }
                                    onChange={
                                        handleDistrictChange
                                    }
                                    disabled={
                                        !state
                                    }
                                    required
                                >
                                    <option value="">
                                        {loadingDistricts
                                            ? "Loading districts..."
                                            : "Select District"}
                                    </option>

                                    {districts.map(
                                        (
                                            item
                                        ) => (
                                            <option
                                                key={
                                                    item.name
                                                }
                                                value={
                                                    item.name
                                                }
                                            >
                                                {
                                                    item.name
                                                }
                                            </option>
                                        )
                                    )}
                                </select>

                                <select
                                    value={
                                        town
                                    }
                                    onChange={
                                        handleTownChange
                                    }
                                    disabled={
                                        !state
                                    }
                                    required
                                >
                                    <option value="">
                                        {loadingTowns
                                            ? "Loading towns..."
                                            : "Select Town / City"}
                                    </option>

                                    {towns.map(
                                        (
                                            item
                                        ) => (
                                            <option
                                                key={
                                                    item.name
                                                }
                                                value={
                                                    item.name
                                                }
                                            >
                                                {
                                                    item.name
                                                }
                                            </option>
                                        )
                                    )}
                                </select>

                                <input
                                    type="text"
                                    value={
                                        pincode
                                    }
                                    onChange={
                                        handlePincodeChange
                                    }
                                    placeholder="Enter Pincode"
                                    inputMode="numeric"
                                    required
                                />
                            </div>

                            <div
                                className={
                                    styles.inputGroup
                                }
                            >
                                <label>
                                    Account Type
                                </label>

                                <select
                                    value={
                                        accountType
                                    }
                                    onChange={
                                        handleAccountTypeChange
                                    }
                                    required
                                >
                                    <option value="">
                                        Select Account Type
                                    </option>

                                    <option value="athlete">
                                        Athlete
                                    </option>

                                    <option value="official">
                                        Official
                                    </option>
                                </select>
                            </div>

                            {accountType ===
                                "athlete" && (
                                    <div
                                        className={
                                            styles.dynamicSection
                                        }
                                    >
                                        <h3>
                                            Athlete
                                            Details
                                        </h3>

                                        {renderFileInput(
                                            "Documents",
                                            "documents",
                                            documentsFile
                                        )}

                                        <div
                                            className={
                                                styles.inputGroup
                                            }
                                        >
                                            <label>
                                                Experience
                                            </label>

                                            <select
                                                name="experience"
                                                value={
                                                    formData.experience
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                            >
                                                <option value="">
                                                    Select Experience
                                                </option>

                                                {experienceOptions.map(
                                                    (
                                                        option
                                                    ) => (
                                                        <option
                                                            key={
                                                                option
                                                            }
                                                            value={
                                                                option
                                                            }
                                                        >
                                                            {
                                                                option
                                                            }
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>

                                        {renderFileInput(
                                            "Certification",
                                            "certification",
                                            certificationFile
                                        )}
                                    </div>
                                )}

                            {accountType ===
                                "official" && (
                                    <div
                                        className={
                                            styles.dynamicSection
                                        }
                                    >
                                        <h3>
                                            Official
                                            Details
                                        </h3>

                                        <div
                                            className={
                                                styles.inputGroup
                                            }
                                        >
                                            <label>
                                                Official
                                                Role
                                            </label>

                                            <select
                                                value={
                                                    officialRole
                                                }
                                                onChange={
                                                    handleOfficialRoleChange
                                                }
                                                required
                                            >
                                                <option value="">
                                                    Select Official Role
                                                </option>

                                                <option value="judge">
                                                    Judge
                                                </option>

                                                <option value="referee">
                                                    Referee
                                                </option>

                                                <option value="coach">
                                                    Coach
                                                </option>

                                                <option value="technical-official">
                                                    Technical
                                                    Official
                                                </option>

                                                <option value="classifier">
                                                    Classifier
                                                </option>
                                            </select>
                                        </div>

                                        {renderOfficialDetails()}
                                    </div>
                                )}

                            <button
                                type="submit"
                                className={
                                    styles.submitButton
                                }
                            >
                                Sign Up
                            </button>
                            <p className={styles.loginText}>
                                Already have an account?
                                <Link href="/login">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;