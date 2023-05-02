import { Component, createRef } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import "./App.css";

interface IEmoji {
  id: string;
  keywords: string[];
  name: string;
  native: string;
  shortcodes: string;
  unified: string;
}

export default class App extends Component {
  state = {
    message: "",
    shifted: false,
    upperCase: false,
    showEmojis: false,
    lightMode: false,
  };
  inputRef = createRef<HTMLInputElement>();

  componentDidMount(): void {
    const keys = document.querySelectorAll<HTMLDivElement>(".key");

    keys.forEach((key) => {
      key.addEventListener("click", () => this.handlePress(key));
    });

    this.inputRef.current?.focus();
  }

  handlePress = (key: HTMLDivElement) => {
    this.setState({ shifted: false });
    this.inputRef.current?.focus();

    switch (key.innerHTML) {
      case "⌫":
        this.setState({ message: this.state.message.slice(0, -1) });
        break;
      case "space":
        this.setState({ message: this.state.message + " " });
        break;
      case "shift":
        this.setState({ shifted: !this.state.shifted, upperCase: false });
        break;
      case "caps":
        this.setState({ upperCase: !this.state.upperCase });
        break;
      case "☺":
        this.setState({ showEmojis: !this.state.showEmojis });
        this.inputRef.current?.blur();
        break;
      case "☼":
      case "☾":
        this.setState({ lightMode: !this.state.lightMode });
        break;
      case "&lt;":
        this.setState({ message: this.state.message + "<" });
        break;
      case "&gt;":
        this.setState({ message: this.state.message + ">" });
        break;
      case "enter":
      case "tab":
        break;
      default:
        this.setState({ message: this.state.message + key.innerHTML });
    }
  };

  handleSelect = (event: IEmoji) => {
    this.setState({
      message: this.state.message + event.native,
      showEmojis: false,
    });

    this.inputRef.current?.focus();
  };

  render() {
    return (
      <div
        className={`container${this.state.lightMode ? " light" : ""}`}
        style={this.state.lightMode ? { backgroundColor: "#f8f8f8" } : {}}
      >
        <input
          type="text"
          value={this.state.message}
          ref={this.inputRef}
          className="input"
          onChange={(event) => this.setState({ message: event.target.value })}
        />
        <div
          style={this.state.showEmojis ? {} : { display: "none" }}
          className="picker"
        >
          <Picker
            data={data}
            emojiButtonSize={32}
            emojiSize={20}
            onEmojiSelect={(event: IEmoji) => this.handleSelect(event)}
            theme={this.state.lightMode ? "light" : "dark"}
          />
        </div>
        <div
          className="normal"
          style={
            this.state.shifted || this.state.upperCase
              ? {
                  display: "none",
                }
              : {}
          }
        >
          <div className="row">
            <div className="key">`</div>
            <div className="key">1</div>
            <div className="key">2</div>
            <div className="key">3</div>
            <div className="key">4</div>
            <div className="key">5</div>
            <div className="key">6</div>
            <div className="key">7</div>
            <div className="key">8</div>
            <div className="key">9</div>
            <div className="key">0</div>
            <div className="key">-</div>
            <div className="key">=</div>
            <div className="key key__backspace">⌫</div>
          </div>
          <div className="row">
            <div className="key key__tab">tab</div>
            <div className="key">q</div>
            <div className="key">w</div>
            <div className="key">e</div>
            <div className="key">r</div>
            <div className="key">t</div>
            <div className="key">y</div>
            <div className="key">u</div>
            <div className="key">i</div>
            <div className="key">o</div>
            <div className="key">p</div>
            <div className="key">[</div>
            <div className="key">]</div>
            <div className="key">\</div>
          </div>
          <div className="row">
            <div className="key key__caps">caps</div>
            <div className="key">a</div>
            <div className="key">s</div>
            <div className="key">d</div>
            <div className="key">f</div>
            <div className="key">g</div>
            <div className="key">h</div>
            <div className="key">j</div>
            <div className="key">k</div>
            <div className="key">l</div>
            <div className="key">;</div>
            <div className="key">'</div>
            <div className="key key__enter">enter</div>
          </div>
          <div className="row">
            <div className="key key__shift-left">shift</div>
            <div className="key">z</div>
            <div className="key">x</div>
            <div className="key">c</div>
            <div className="key">v</div>
            <div className="key">b</div>
            <div className="key">n</div>
            <div className="key">m</div>
            <div className="key">,</div>
            <div className="key">.</div>
            <div className="key">/</div>
            <div className="key key__shift-right">shift</div>
          </div>
          <div className="row">
            <div className="key key__filler">☺</div>
            <div className="key key__space">space</div>
            <div className="key key__filler">
              {this.state.lightMode ? "☾" : "☼"}
            </div>
          </div>
        </div>
        <div
          className="shifted"
          style={this.state.shifted ? {} : { display: "none" }}
        >
          <div className="row">
            <div className="key">~</div>
            <div className="key">!</div>
            <div className="key">@</div>
            <div className="key">#</div>
            <div className="key">$</div>
            <div className="key">%</div>
            <div className="key">^</div>
            <div className="key">&</div>
            <div className="key">*</div>
            <div className="key">(</div>
            <div className="key">)</div>
            <div className="key">_</div>
            <div className="key">+</div>
            <div className="key key__backspace">⌫</div>
          </div>
          <div className="row">
            <div className="key key__tab">tab</div>
            <div className="key">Q</div>
            <div className="key">W</div>
            <div className="key">E</div>
            <div className="key">R</div>
            <div className="key">T</div>
            <div className="key">Y</div>
            <div className="key">U</div>
            <div className="key">I</div>
            <div className="key">O</div>
            <div className="key">P</div>
            <div className="key">{"{"}</div>
            <div className="key">{"}"}</div>
            <div className="key">|</div>
          </div>
          <div className="row">
            <div className="key key__caps">caps</div>
            <div className="key">A</div>
            <div className="key">S</div>
            <div className="key">D</div>
            <div className="key">F</div>
            <div className="key">G</div>
            <div className="key">H</div>
            <div className="key">J</div>
            <div className="key">K</div>
            <div className="key">L</div>
            <div className="key">:</div>
            <div className="key">"</div>
            <div className="key key__enter">enter</div>
          </div>
          <div className="row">
            <div className="key key__shift-left">shift</div>
            <div className="key">Z</div>
            <div className="key">X</div>
            <div className="key">C</div>
            <div className="key">V</div>
            <div className="key">B</div>
            <div className="key">N</div>
            <div className="key">M</div>
            <div className="key">{"<"}</div>
            <div className="key">{">"}</div>
            <div className="key">?</div>
            <div className="key key__shift-right">shift</div>
          </div>
          <div className="row">
            <div className="key key__filler">☺</div>
            <div className="key key__space">space</div>
            <div className="key key__filler">
              {this.state.lightMode ? "☾" : "☼"}
            </div>
          </div>
        </div>
        <div
          className="upper-case"
          style={this.state.upperCase ? {} : { display: "none" }}
        >
          <div className="row">
            <div className="key">`</div>
            <div className="key">1</div>
            <div className="key">2</div>
            <div className="key">3</div>
            <div className="key">4</div>
            <div className="key">5</div>
            <div className="key">6</div>
            <div className="key">7</div>
            <div className="key">8</div>
            <div className="key">9</div>
            <div className="key">0</div>
            <div className="key">-</div>
            <div className="key">=</div>
            <div className="key key__backspace">⌫</div>
          </div>
          <div className="row">
            <div className="key key__tab">tab</div>
            <div className="key">Q</div>
            <div className="key">W</div>
            <div className="key">E</div>
            <div className="key">R</div>
            <div className="key">T</div>
            <div className="key">Y</div>
            <div className="key">U</div>
            <div className="key">I</div>
            <div className="key">O</div>
            <div className="key">P</div>
            <div className="key">[</div>
            <div className="key">]</div>
            <div className="key">\</div>
          </div>
          <div className="row">
            <div className="key key__caps">caps</div>
            <div className="key">A</div>
            <div className="key">S</div>
            <div className="key">D</div>
            <div className="key">F</div>
            <div className="key">G</div>
            <div className="key">H</div>
            <div className="key">J</div>
            <div className="key">K</div>
            <div className="key">L</div>
            <div className="key">;</div>
            <div className="key">'</div>
            <div className="key key__enter">enter</div>
          </div>
          <div className="row">
            <div className="key key__shift-left">shift</div>
            <div className="key">Z</div>
            <div className="key">X</div>
            <div className="key">C</div>
            <div className="key">V</div>
            <div className="key">B</div>
            <div className="key">N</div>
            <div className="key">M</div>
            <div className="key">,</div>
            <div className="key">.</div>
            <div className="key">/</div>
            <div className="key key__shift-right">shift</div>
          </div>
          <div className="row">
            <div className="key key__filler">☺</div>
            <div className="key key__space">space</div>
            <div className="key key__filler">
              {this.state.lightMode ? "☾" : "☼"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
