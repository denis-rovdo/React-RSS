/* import React, { Component, ChangeEvent, createRef, RefObject } from 'react';
import styles from './Form.module.scss';


class Form extends Component {

  nameRef: RefObject<HTMLInputElement>;
  descriptionRef: RefObject<HTMLTextAreaElement>;
  orderDateRef: RefObject<HTMLInputElement>;
  countryRef: RefObject<HTMLSelectElement>;
  solutionRef: RefObject<HTMLInputElement>;
  imageRef: RefObject<HTMLInputElement>;
  isCheckedRef: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.nameRef = createRef();
    this.descriptionRef = createRef();
    this.orderDateRef = createRef();
    this.countryRef = createRef();
    this.solutionRef = createRef();
    this.imageRef = createRef();
    this.isCheckedRef = createRef();

  }
  state = {
    name: '',
    description: '',
    orderDate: '',
    country: '',
    isChecked: false,
    solution: '',
    image: ''
  };
  handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const check = target as HTMLInputElement;
    const value = target.type === 'checkbox' ? check.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleImageChange = (e: ChangeEvent<HTMLFormElement>): void => {
    const image = e.target.files[0];
    this.setState({ image });
  };

  handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state);

    this.setState({
      name: '',
      description: '',
      orderDate: '',
      country: '',
      isChecked: false,
      solution: '',
      image: ''
    });
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Your name:
          </label>
          <input
            type="text"
            name="name"
            className={styles.input}
            value={this.state.name}
            onChange={this.handleInputChange}
            ref={this.nameRef}
          />
          <label className={styles.label}>
            Description of the problem:
          </label>
          <textarea
            name="description"
            className={styles.input}
            value={this.state.description}
            onChange={this.handleInputChange}
            ref={this.descriptionRef}
          />

          <label className={styles.label}>
            Order date:
          </label>
          <input
            type="date"
            name="orderDate"
            className={styles.input}
            value={this.state.orderDate}
            onChange={this.handleInputChange}
            ref={this.orderDateRef}
          />

          <label className={styles.label}>
            Country:
          </label>
          <select
            name="country"
            className={styles.select}
            value={this.state.country}
            onChange={this.handleInputChange}
            ref={this.countryRef}
          >
            <option value="">-- Choose country --</option>
            <option value="by">Belarus</option>
            <option value="ua">Ukraine</option>
            <option value="pl">Poland</option>
          </select>
          <label className={styles.label}>
            Solution:
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="solution"
              value="refund"
              checked={this.state.solution === 'refund'}
              onChange={this.handleInputChange}
              className={styles.radio}
              ref={this.isCheckedRef}
            />
            Refund
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="solution"
              value="replacement"
              checked={this.state.solution === 'replacement'}
              onChange={this.handleInputChange}
              className={styles.radio}
            />
            Product replacement
          </label>

          <label className={styles.label}>
            Upload Image:
          </label>
          <input
            type="file"
            name="image"
            onChange={this.handleImageChange}
            className={styles.input}
          />

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="isChecked"
              checked={this.state.isChecked}
              onChange={this.handleInputChange}
              className={styles.checkbox}
              ref={this.isCheckedRef}
            />
            I am not a robot
          </label>

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
 */

import React, { Component, ChangeEvent } from 'react';
import styles from './Form.module.scss';

class Form extends Component {
  state = {
    name: '',
    description: '',
    orderDate: '',
    country: '',
    isChecked: false,
    solution: '',
    image: '',
  };

  handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const check = target as HTMLInputElement;
    const value = target.type === 'checkbox' ? check.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleImageChange = (e: ChangeEvent<HTMLElement>) => {
    const image = e.target.files[0];
    this.setState({ image });
  };

  handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Do something with the form data
    console.log(this.state);

    this.setState({
      name: '',
      description: '',
      orderDate: '',
      country: '',
      isChecked: false,
      solution: '',
      image: '',
    });
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label htmlFor="name" className={styles.label}>
            Your name:
          </label>
          <input
            type="text"
            name="name"
            className={styles.input}
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label htmlFor="description" className={styles.label}>
            Description of the problem:
          </label>
          <textarea
            name="description"
            className={styles.input}
            value={this.state.description}
            onChange={this.handleInputChange}
          />

          <label htmlFor="orderDate" className={styles.label}>
            Order date:
          </label>
          <input
            type="date"
            name="orderDate"
            className={styles.input}
            value={this.state.orderDate}
            onChange={this.handleInputChange}
          />

          <label htmlFor="country" className={styles.label}>
            Country:
          </label>
          <select
            name="country"
            className={styles.select}
            value={this.state.country}
            onChange={this.handleInputChange}
          >
            <option value="">-- Choose country --</option>
            <option value="by">Belarus</option>
            <option value="ua">Ukraine</option>
            <option value="pl">Poland</option>
          </select>

          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="solution"
              value="refund"
              checked={this.state.solution === 'refund'}
              onChange={this.handleInputChange}
              className={styles.radio}
            />
            Refund
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="solution"
              value="replacement"
              checked={this.state.solution === 'replacement'}
              onChange={this.handleInputChange}
              className={styles.radio}
            />
            Product replacement
          </label>

          <label htmlFor="image" className={styles.label}>
            Upload Image:
          </label>
          <input
            type="file"
            name="image"
            onChange={this.handleImageChange}
            className={styles.input}
          />

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="isChecked"
              checked={this.state.isChecked}
              onChange={this.handleInputChange}
              className={styles.checkbox}
            />
            I am not a robot
          </label>

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
