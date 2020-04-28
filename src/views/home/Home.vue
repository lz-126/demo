<template>
  <div>
    <navbar class="nav-bar">
      <div slot="left"></div>
      <div slot="center">蘑菇街</div>
      <div slot="right"></div>
    </navbar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-popular />
    <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
    </ul>
  </div>
</template>

<script>
//外部插件
import axios from "axios";
//公共组件
import Navbar from "../../components/common/Nav-bar/nav-bar";
import TabControl from "../../components/content/tabControl/TabControl";
//home子组件
import { getHomeMultidata } from "../../network/home";
import HomeSwiper from "../../views/home/childComps/HomeSwiper";
import HomeRecommend from "../../views/home/childComps/HomeRecommend";
import HomePopular from "../../views/home/childComps/HomePopular";

export default {
  name: "Home",
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    this.getHomeMultiData();
  },
  methods: {
    getHomeMultiData() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    }
  }
};
</script>

<style scoped>
.nav-bar {
  width: 100%;
  background-color: hotpink;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>
