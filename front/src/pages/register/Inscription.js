import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useNavigate } from "react-router-dom";
import { createUser } from "../../api/users";
import logo from "../../img/logo.png";
import styles from "../../sass/Register.module.scss";

export default function Inscription() {
  const [feedback, setFeedBack] = useState(false);
  const [feedbackGood, setFeedBackGood] = useState("");
  const [acceptedCGU, setAcceptedCGU] = useState(false);
  const navigate = useNavigate();

  const yupSchema = yup.object({
    username: yup.string().required("Le champ est obligatoire").min(2, "Le champ doit contenir au minimum 2 caractères").max(20),
    email: yup.string().required("Le champ est obligatoire").email("Vous devez saisir un email valide"),
    password: yup.string().required("Le champ est obligatoire").min(5, "Mot de passe trop court").max(10, "Mot de passe trop long"),
    confirmPassword: yup.string().required("Vous devez confirmer votre mot de passe").oneOf([yup.ref("password", "")], "Les mots de passe ne correspondent pas"),
    acceptCGU: yup.boolean().oneOf([true], "Vous devez accepter les CGU pour continuer"),
  });

  const defaultValues = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  };

  const { register, handleSubmit, reset, formState: { errors, isSubmitting }, setError, clearErrors } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(yupSchema),
  });

  async function submit(values) {
    try {
      clearErrors();
      await createUser(values);
      if (!acceptedCGU) {
        setError("acceptCGU", { type: "manual", message: "Vous devez accepter les CGU pour continuer" });
        return;
      }
      setFeedBack(true)
      setTimeout(() => {
        navigate("/connexion");
      }, 3000);
   } catch (error) {
    reset(defaultValues)
     setError("generic", {type: "generic", message: error});  
   }
  }

  return (
    <div className={`flex-fill d-flex flex-column justify-content-center align-items-center ${styles.appContainer}`}>
    <form onSubmit={handleSubmit(submit)} className={`d-flex align-items-center flex-column card p20 mb20 mt20`}>
        <NavLink to="/">
           <img src={logo} alt="" className={`${styles.logo}`} />
         </NavLink>
    <div className="mb10 d-flex flex-column">
        <label className="mb10 ml20" htmlFor="username">Pseudo</label>
        <input type="text" {...register("username")} id="username" placeholder="pseudo"  className="p10" />
        {errors.username  && <p className="form-error">{errors.username.message}</p>}
    </div>
    <div className="mb10 d-flex flex-column">
        <label className="mb10 ml20" htmlFor="email">Email</label>
        <input type="text" {...register("email")} id="email" placeholder="email" className="p10"/>
        {errors.email  && <p className="form-error">{errors.email.message}</p>}
    </div>
    <div className="mb10 d-flex flex-column">
        <label className="mb10 ml20" htmlFor="password">Mot de passe</label>
        <input type="password" {...register("password")} id="password" placeholder="  mot de passe" className="p10"/>
        {errors.password  && <p className="form-error">{errors.password.message}</p>}
    </div>
    <div className="d-flex flex-column mb10">
          <label htmlFor="confirmPassword" className="mb10 ml20">
             Confirmer votre mot de passe
          </label>
           <input type="password" id="confirmPassword" {...register("confirmPassword")} placeholder="confirmer mot de passe" className="p10" />
           {errors?.confirmPassword && <p className="form-error">{errors.confirmPassword.message}</p>}
    </div>
    <div className="mb10 d-flex justify-content-center align-items-center ">
      <label className="mb10 ml20 d-flex align-items-center" htmlFor="acceptCGU">
        <input style={{width: "20px"}} type="checkbox" {...register("acceptCGU")} id="acceptCGU" onChange={(e) => setAcceptedCGU(e.target.checked)} />
        <div>
        J'accepte les CGU
        </div>
      </label>
      {errors.acceptCGU && <p className="form-error">{errors.acceptCGU.message}</p>}
    </div>
         {errors.generic  && <p className="form-error">{errors.generic.message}</p>}
         {feedback && <p>Inscription réussi !</p>}
    <div className="mb10">
        <button className={`btn btn-primary ${styles.button}`} disabled={isSubmitting}>Confirmer</button>
    </div>
    </form>
</div>
  );
}
