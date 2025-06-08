--
-- PostgreSQL database dump
--

-- Dumped from database version 16.8 (Debian 16.8-1.pgdg120+1)
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: fullstackproject_bhoh_user
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO fullstackproject_bhoh_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cart_items; Type: TABLE; Schema: public; Owner: fullstackproject_bhoh_user
--

CREATE TABLE public.cart_items (
    id integer NOT NULL,
    product_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.cart_items OWNER TO fullstackproject_bhoh_user;

--
-- Name: cart_items_id_seq; Type: SEQUENCE; Schema: public; Owner: fullstackproject_bhoh_user
--

CREATE SEQUENCE public.cart_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cart_items_id_seq OWNER TO fullstackproject_bhoh_user;

--
-- Name: cart_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER SEQUENCE public.cart_items_id_seq OWNED BY public.cart_items.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: fullstackproject_bhoh_user
--

CREATE TABLE public.categories (
    category_id integer NOT NULL,
    name text NOT NULL,
    description text,
    bild text
);


ALTER TABLE public.categories OWNER TO fullstackproject_bhoh_user;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: fullstackproject_bhoh_user
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    order_id integer NOT NULL
);


ALTER TABLE public.orders OWNER TO fullstackproject_bhoh_user;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: fullstackproject_bhoh_user
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.orders_id_seq OWNER TO fullstackproject_bhoh_user;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: product_categories; Type: TABLE; Schema: public; Owner: fullstackproject_bhoh_user
--

CREATE TABLE public.product_categories (
    id integer NOT NULL,
    category_id integer NOT NULL
);


ALTER TABLE public.product_categories OWNER TO fullstackproject_bhoh_user;

--
-- Name: products; Type: TABLE; Schema: public; Owner: fullstackproject_bhoh_user
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    amount integer,
    bild_url text,
    description text
);


ALTER TABLE public.products OWNER TO fullstackproject_bhoh_user;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: fullstackproject_bhoh_user
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO fullstackproject_bhoh_user;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: cart_items id; Type: DEFAULT; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER TABLE ONLY public.cart_items ALTER COLUMN id SET DEFAULT nextval('public.cart_items_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Data for Name: cart_items; Type: TABLE DATA; Schema: public; Owner: fullstackproject_bhoh_user
--

COPY public.cart_items (id, product_id, created_at) FROM stdin;
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: fullstackproject_bhoh_user
--

COPY public.categories (category_id, name, description, bild) FROM stdin;
1	Top Hats	Elegant hats with high design	https://u.cubeupload.com/lottavolpe/xOahCu.png
2	Fedoras	Coolest hats ever	https://u.cubeupload.com/lottavolpe/xxU1ic.png
3	Festive	For party time	https://u.cubeupload.com/lottavolpe/AezBZd.png
4	Retro Revival	Antique & different time period hats	https://u.cubeupload.com/lottavolpe/Q5a0H0.png
5	Cowboy Cowabunga	Authentic Leather Cowboy Hats for every occasion!	https://u.cubeupload.com/lottavolpe/QsG46H.png
6	Fur Hats	Slavic Inspired Fur Hats of your dreams!	https://u.cubeupload.com/lottavolpe/RbukpQ.png
7	Holiday Cheer Line	Holiday hats for every occasion!	https://u.cubeupload.com/lottavolpe/XJ2qXC.png
8	Military Hats	Military Mania over here! Authentic military hats for all the MÖPs!!!! 	https://u.cubeupload.com/lottavolpe/iPMobW.png
9	Historical Hats	All Historical Hats	https://u.cubeupload.com/lottavolpe/lF0EgK.png
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: fullstackproject_bhoh_user
--

COPY public.orders (id, order_id) FROM stdin;
\.


--
-- Data for Name: product_categories; Type: TABLE DATA; Schema: public; Owner: fullstackproject_bhoh_user
--

COPY public.product_categories (id, category_id) FROM stdin;
1	3
2	1
2	3
3	2
4	4
6	4
8	1
7	1
11	5
15	7
9	6
13	4
12	5
10	8
14	3
10	9
4	9
5	9
7	3
6	1
3	3
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: fullstackproject_bhoh_user
--

COPY public.products (id, name, price, amount, bild_url, description) FROM stdin;
8	Leprechaun Hat	35	9	https://u.cubeupload.com/lottavolpe/ii6xgb.png	Classic green hat with golden buckle - perfect for St. Patrick's Day and magical adventures
4	Old School - Pir...	90	3	https://u.cubeupload.com/lottavolpe/BKH3ma.png	Authentic pirate vibes with this vintage tricorn hat in leather and brass
5	English Top Hat	30	5	https://u.cubeupload.com/lottavolpe/GSUy2k.png	Luxurious greyish brown English Top Hat with gold details
6	Fancy Hat	30	2	https://u.cubeupload.com/lottavolpe/4nOTxa.png	Elegant black silk top hat - for the true gentleman
7	Mad hatters hat	50	40	https://u.cubeupload.com/lottavolpe/q6tPTz.png	Crazy and colorful like Alice in Wonderland - for those who dare to stand out
2	Colorburst Hat - ..	20	19	https://u.cubeupload.com/lottavolpe/5KM5tc.png	Explosive color mix that lights up any room you enter
3	Fedora	2500	25	https://u.cubeupload.com/lottavolpe/bPLp0L.png	Classic fedora in premium felt - timeless style for every occasion
9	Anastasia	119	5	https://u.cubeupload.com/lottavolpe/JtKonB.png	Elegant ladies' Russian Fur Hat - perfect for chilly nights
10	Leather Officer Hat	25	25	https://u.cubeupload.com/lottavolpe/dbEKvg.png	Sturdy officer's hat in genuine leather - commands respect and style
11	Carl's Cool Cowboy	15	12	https://u.cubeupload.com/lottavolpe/ms7djE.png	Authentic cowboy hat that Carl himself would be proud to wear
12	Ross' Rodeo Ruler	75	4	https://u.cubeupload.com/lottavolpe/WZkk5Z.png	Premium holographic Rodeo hat for those who rule the wild west in style
13	Tangerine Dream	12	6	https://u.cubeupload.com/lottavolpe/idrBLM.png	Vibrant orange hat that brings sunshine to even the gloomiest days
14	Twisted Mirage	19	12	https://u.cubeupload.com/lottavolpe/HGgd3x.png	Mysterious and unique design that changes with every angle you look
15	Holly Jolly	6	35	https://u.cubeupload.com/lottavolpe/6XUUMe.png	Festive Christmas hat that spreads holiday cheer wherever you go
1	Santa's Elf Hat 	20	2	https://u.cubeupload.com/lottavolpe/q57Sio.png	Playful elf hat with ears for your furry friend, straight from Santa's workshop - ho ho ho!
18	Normal	1	3	https://u.cubeupload.com/lottavolpe/xOahCu.png	Okej skick
17	Witch	899	5	https://u.cubeupload.com/lottavolpe/U0MslL.png	Witches get Bitches
19	solhatt	12	3	https://u.cubeupload.com/lottavolpe/U0MslL.png	radadada
\.


--
-- Name: cart_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fullstackproject_bhoh_user
--

SELECT pg_catalog.setval('public.cart_items_id_seq', 1, false);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fullstackproject_bhoh_user
--

SELECT pg_catalog.setval('public.orders_id_seq', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fullstackproject_bhoh_user
--

SELECT pg_catalog.setval('public.products_id_seq', 6, true);


--
-- Name: cart_items cart_items_pkey; Type: CONSTRAINT; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (category_id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: product_categories product_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER TABLE ONLY public.product_categories
    ADD CONSTRAINT product_categories_pkey PRIMARY KEY (id, category_id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: cart_items cart_items_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- Name: orders orders_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.products(id);


--
-- Name: product_categories product_categories_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER TABLE ONLY public.product_categories
    ADD CONSTRAINT product_categories_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(category_id) ON DELETE CASCADE;


--
-- Name: product_categories product_categories_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: fullstackproject_bhoh_user
--

ALTER TABLE ONLY public.product_categories
    ADD CONSTRAINT product_categories_id_fkey FOREIGN KEY (id) REFERENCES public.products(id) ON DELETE CASCADE;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES TO fullstackproject_bhoh_user;


--
-- Name: DEFAULT PRIVILEGES FOR TYPES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES TO fullstackproject_bhoh_user;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS TO fullstackproject_bhoh_user;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLES TO fullstackproject_bhoh_user;


--
-- PostgreSQL database dump complete
--

