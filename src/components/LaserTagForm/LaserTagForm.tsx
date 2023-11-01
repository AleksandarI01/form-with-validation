import styles from "./LaserTagForm.module.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  participants: number;
  channel: string;
  date: Date;
  time: string;
  comments?: string;
};

export const LaserTagForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const [submitted, setSubmitted] = useState(false);
  const [bookingInfo, setBookingInfo] = useState<FormValues | null>(null);

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
    setBookingInfo(data);
    setSubmitted(true);
  };

  const formatDate = (date: Date) => {
    const day = date.getDate().toString();
    const month = (date.getMonth() + 1).toString();
    const year = date.getFullYear().toString();
    return `${day}.${month}.${year}`;
  };

  return (
    <>
      <div className={styles["booking-form"]}>
        <h2>Laser Tag Arena: Booking Form</h2>
        <form
          className={styles["form-fields"]}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {/* Firstname section */}
          <div className={styles["form-control"]}>
            <label htmlFor="firstname">Firstname*</label>
            <input
              type="text"
              id="firstname"
              {...register("firstname", {
                required: {
                  value: true,
                  message: "Firstname is required",
                },
                minLength: {
                  value: 2,
                  message: "it needs to have at least 2 letters",
                },
                maxLength: {
                  value: 15,
                  message: "Firstname must not exceed 15 characters",
                },
              })}
            />
            <div className={styles["error-container"]}>
              <p className={styles.error}>{errors.firstname?.message}</p>
            </div>
          </div>

          {/* Lastname section */}
          <div className={styles["form-control"]}>
            <label htmlFor="lastname">Lastname*</label>
            <input
              type="text"
              id="lastname"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "Lastname is required",
                },
                minLength: {
                  value: 2,
                  message: "it needs to have at least 2 letters",
                },
                maxLength: {
                  value: 15,
                  message: "Lastname must not exceed 15 characters",
                },
              })}
            />
            <div className={styles["error-container"]}>
              <p className={styles.error}>{errors.lastname?.message}</p>
            </div>
          </div>

          {/* Email section */}
          <div className={styles["form-control"]}>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "invalid email format",
                },
                required: {
                  value: true,
                  message: "email is required",
                },
              })}
            />
            <div className={styles["error-container"]}>
              <p className={styles.error}>{errors.email?.message}</p>
            </div>
          </div>

          {/* Number of people in the booking */}
          <div className={styles["form-control"]}>
            <label htmlFor="participants">Number of people*</label>
            <input
              type="number"
              id="participants"
              {...register("participants", {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: "Number of people is required",
                },
                validate: {
                  min: (fieldValue) => {
                    return fieldValue >= 2 || "must be at least 2 participants";
                  },
                  max: (fieldValue) => {
                    return (
                      fieldValue <= 10 ||
                      "the room has space for a max of 10 people"
                    );
                  },
                },
              })}
            />
            <div className={styles["error-container"]}>
              <p className={styles.error}>{errors.participants?.message}</p>
            </div>
          </div>

          {/* Date for the laser tag session */}
          <div className={styles["form-control"]}>
            <label htmlFor="date">Date*</label>
            <input
              type="date"
              id="date"
              {...register("date", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "desired date is required",
                },
              })}
              min={(() => {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                return tomorrow.toISOString().split("T")[0];
              })()}
            />
            <div className={styles["error-container"]}>
              <p className={styles.error}>{errors.date?.message}</p>
            </div>
          </div>

          {/* Time for the laser tag session */}
          <div className={styles["form-control"]}>
            <label htmlFor="time">Available time slots*</label>
            <select
              {...register("time", {
                required: {
                  value: true,
                  message: "desired time is required",
                },
              })}
            >
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
            </select>
            <div className={styles["error-container"]}>
              <p className={styles.error}>{errors.time?.message}</p>
            </div>
          </div>

          {/* Additional comments */}
          <div className={styles["form-control"]}>
            <label htmlFor="comments">Additional comments</label>
            <textarea
              id="comments"
              {...register("comments", {
                maxLength: {
                  value: 40,
                  message: "it must not exceed 40 characters",
                },
              })}
            />
            <div className={styles["error-container"]}>
              <p className={styles.error}>{errors.comments?.message}</p>
            </div>
          </div>

          <button>Submit</button>
        </form>
        <DevTool control={control} />
      </div>

      {/* submitted information section */}
      {submitted && (
        <div className={styles["submitted-form"]}>
          <p>
            Thank you for booking your lasertag session. Below you can find the
            booking details:
          </p>
          <p>
            <b>Full name:</b> {bookingInfo?.firstname} {bookingInfo?.lastname}
          </p>
          <p>
            <b>Email:</b> {bookingInfo?.email}
          </p>
          <p>
            <b>Number of participants:</b> {bookingInfo?.participants}
          </p>
          <p>
            <b>Date desired for the laser tag session</b>:{" "}
            {bookingInfo && formatDate(bookingInfo.date)}
          </p>
          <p>
            <b>1 hour session starts at:</b> {bookingInfo?.time}
          </p>
          {bookingInfo?.comments?.trim() ? (
            <p>
              <b>Additional comments:</b> {bookingInfo?.comments}
            </p>
          ) : (
            <p>
              <b>no additional comments</b>
            </p>
          )}
        </div>
      )}
    </>
  );
};
