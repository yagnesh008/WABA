"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Login.module.css";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");

        if (!email || !password) {
            setError("Please enter your email and password.");
            return;
        }

        console.log("Login Details:", {
            email,
            password,
            rememberMe,
        });

        // Backend authentication will be connected here later.
        alert("Login submitted successfully!");
    };

    return (
        <main className={styles.loginPage}>

            <div className={styles.loginContainer}>

                <section className={styles.leftSection}>

                    <div className={styles.logo}>
                        <Image
                            src="/images/logo.png"
                            alt="WABA Logo"
                            width={150}
                            height={70}
                        />
                    </div>

                    <div className={styles.leftContent}>

                        <h1>Welcome Back</h1>

                        <p>
                            Login to your WABA account and
                            continue your journey with the
                            Wheelchair Adaptive Boxing
                            Association.
                        </p>

                        <div className={styles.tags}>
                            <span>EMPOWER</span>
                            <span>ADAPT</span>
                            <span>FIGHT</span>
                            <span>INSPIRE</span>
                        </div>

                    </div>

                </section>

                <section className={styles.rightSection}>

                    <div className={styles.formWrapper}>

                        <h2>Login</h2>

                        <p className={styles.subtitle}>
                            Sign in to your WABA account
                        </p>

                        <form onSubmit={handleSubmit}>

                            <div className={styles.inputGroup}>

                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="Enter your email"
                                    autoComplete="email"
                                    required
                                />

                            </div>

                            <div className={styles.inputGroup}>

                                <label htmlFor="password">
                                    Password
                                </label>

                                <div className={styles.passwordWrapper}>

                                    <input
                                        id="password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        required
                                    />

                                    <button
                                        type="button"
                                        className={styles.showPassword}
                                        onClick={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                    >
                                        {showPassword
                                            ? "Hide"
                                            : "Show"}
                                    </button>

                                </div>

                            </div>

                            <div className={styles.options}>

                                <label className={styles.remember}>

                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) =>
                                            setRememberMe(
                                                e.target.checked
                                            )
                                        }
                                    />

                                    <span>
                                        Remember me
                                    </span>

                                </label>

                                <Link
                                    href="/forgot-password"
                                    className={styles.forgotPassword}
                                >
                                    Forgot Password?
                                </Link>

                            </div>

                            {error && (
                                <p className={styles.error}>
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                className={styles.loginButton}
                            >
                                Login
                            </button>

                        </form>

                        <div className={styles.signupText}>

                            <span>
                                Don't have an account?
                            </span>

                            <Link href="/Signup">
                                Join WABA
                            </Link>

                        </div>

                    </div>

                </section>

            </div>

        </main>
    );
}

export default LoginPage;