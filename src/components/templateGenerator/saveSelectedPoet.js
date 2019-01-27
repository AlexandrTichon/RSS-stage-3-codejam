function savePoet() {
  localStorage.clear();
  localStorage.setItem('userSelect', this.innerHTML);
}

export default savePoet;
