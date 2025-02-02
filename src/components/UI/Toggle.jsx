function Toggle({ handleToggle, toggleLabel }) {
  return (
    <label className="block relative justify-between bg-primary-500 rounded-xl w-20 h-10 hover:cursor-pointer">
      <input
        type="checkbox"
        className="absolute opacity-0 w-0 h-0 peer"
        onChange={handleToggle}
        aria-label={toggleLabel}
      />
      <span
        className={`abosolute before:top-1 before:left-1 before:w-[36px] before:absolute
                  before:bg-white before:rounded-[9px] before:h-8 before:transition-all
                    before:duration-300 peer-checked:before:translate-x-[36px]`}
      />
    </label>
  );
}

export default Toggle;
