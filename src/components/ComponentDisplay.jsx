import React from "react";
const ComponentDisplay = () => {
  return (
    <>
      <div className="card-2">
        <ColorModeToggle></ColorModeToggle>
        <div>
          <div className="card-3 flex gap-3 justify-center items-center">
            <button className="primary-btn my-auto">Primary</button>
            <button className="relative branded-btn my-auto">
              Point Of Light
              <div class="notification-count">8</div>
            </button>
            <button className="green-btn my-auto">Go Button</button>
            <button className="danger-btn my-auto">Danger</button>
            <div>
              <label className="input-label" for="input">
                Input:
              </label>
              <input
                id="input"
                placeholder="Input stuff"
                type="text"
                className="text-input"
              ></input>
            </div>
            <div>
              <label className="input-label-disabled" for="input">
                Disabled Input:
              </label>
              <input
                disabled
                id="input"
                placeholder="Input stuff"
                type="text"
                className="text-input-disabled"
              ></input>
            </div>
            <div class="relative z-0">
              <input
                type="text"
                id="floating_standard"
                class="floating-input-text peer"
                placeholder=" "
              />
              <label for="floating_standard" class="floating-input-label">
                Floating Label Input
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                id="checkbox"
                type="checkbox"
                className="checkbox-input"
              ></input>
              <label className="input-label" for="checkbox">
                Checkbox
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                disabled
                id="checkbox"
                type="checkbox"
                className="checkbox-input-disabled"
              ></input>
              <label className="input-label-disabled" for="checkbox">
                Disabled Checkbox
              </label>
            </div>
          </div>
          <div className="card-3 mt-5">
            <div>
              <label for="steps-range" class="input-label">
                Range steps
              </label>
              <input
                id="steps-range"
                type="range"
                min="0"
                max="5"
                value="2.5"
                step="0.5"
                class="w-full h-2 bg-neutral-400 rounded-lg appearance-none cursor-pointer dark:bg-neutral-500"
              />
              <label for="progress" className="input-label">
                Progress Bar
              </label>
              <div class="progress-bar-outside mt-2">
                <div class="progress-bar-inside w-1/2"></div>
              </div>
            </div>
            <div>
              <div className="button-group-container mt-5">
                <button className="">Detail View</button>
                <button className="">Unit Editor</button>
                <button className="">Focus Photos</button>
                <button className="">Invoices</button>
                <button className="">More Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-2 w-fit mt-5">
        <h1 class="heading-vari">Variable Font Heading</h1>
        <h1 class="heading-thin">Thin Font Heading</h1>
        <h1 class="heading-extralight">Extralight Font Heading</h1>
        <h1 class="heading-light">Light Font Heading</h1>
        <h1 class="heading-regular">Regular Font Heading</h1>
        <h1 class="heading-medium">Medium Font Heading</h1>
        <h1 class="heading-bold">Bold Font Heading</h1>
        <h1 class="heading-extrabold">Extrabold Font Heading</h1>
        <h1 class="heading-black">Black Font Heading</h1>

        <hr className="divider-1"></hr>

        <p className="text-regular">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
          tenetur possimus consequuntur minus sed harum aspernatur vitae
          voluptas quam nemo, dolorum, illo ipsum officia exercitationem illum
          porro quos autem aut. Enim sapiente, perferendis ipsam dolorem, at
          ipsum modi optio impedit eligendi quis sit laboriosam qui ea!
        </p>
        <p className="sub-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          incidunt tempore autem, magni qui ullam ut repudiandae vitae quas
          magnam suscipit architecto consequuntur impedit iusto nesciunt
          dignissimos assumenda. Reiciendis, exercitationem!
        </p>
        <p className="hidden-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          doloremque at nesciunt voluptas reprehenderit accusantium, mollitia,
          cupiditate eligendi facilis explicabo nobis possimus expedita magnam
          aperiam dolores, excepturi voluptates sapiente tempore?
        </p>
        <div className="flex card-3 justify-around">
          <div className="card-4 w-60">
            <h1 className="heading-2">Darker Card</h1>
            <hr className="divider-2"></hr>
            <p className="text-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias earum quam sit fugiat accusantium magni vero
              necessitatibus nesciunt deserunt at numquam consequuntur pariatur
              quo modi iure inventore natus, dolor ex.
            </p>
          </div>
          <div className="inverse-card-1 w-60">
            <h1 className="inverse-heading-1">Inverse Card 1</h1>
            <hr className="inverse-divider-1"></hr>
            <p className="inverse-text-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias earum quam sit fugiat accusantium magni vero
              necessitatibus nesciunt deserunt at numquam consequuntur pariatur
              quo modi iure inventore natus, dolor ex.
            </p>
          </div>
          <div className="inverse-card-2 w-60">
            <h1 className="inverse-heading-2">Inverse Card 2</h1>
            <hr className="inverse-divider-2"></hr>
            <p className="inverse-text-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias earum quam sit fugiat accusantium magni vero
              necessitatibus nesciunt deserunt at numquam consequuntur pariatur
              quo modi iure inventore natus, dolor ex.
            </p>
          </div>
          <div
            id="dropdown"
            class="z-10 h-fit bg-white divide-y divide-neutral-100 rounded-lg shadow-lg shadow-neutral-400 dark:shadow-neutral-800 w-44 dark:bg-neutral-700"
          >
            <ul
              class="py-2 text-sm text-neutral-700 dark:text-neutral-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a class="text-regular block px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:hover:text-white">
                  Dashboard
                </a>
              </li>
              <li>
                <a class="text-regular block px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:hover:text-white">
                  Settings
                </a>
              </li>
              <li>
                <a class="text-regular block px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:hover:text-white">
                  Earnings
                </a>
              </li>
              <li>
                <a class="text-regular block px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:hover:text-white">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-5 items-center h-fit">
            <label className="input-label">Indicators:</label>
            <span className="light-indicator"></span>
            <span className="dark-indicator"></span>
            <span className="blue-indicator"></span>
            <span className="green-indicator"></span>
            <span className="red-indicator"></span>
            <span className="yellow-indicator"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentDisplay;
